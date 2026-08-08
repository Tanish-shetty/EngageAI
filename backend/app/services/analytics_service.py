from collections import Counter, defaultdict

from sqlalchemy.orm import Session

from app.models.prediction_history import PredictionHistory


class AnalyticsService:

    @staticmethod
    def get_dashboard_stats(
        db: Session,
        user_id: int,
    ):
        records = (
            db.query(PredictionHistory)
            .filter(PredictionHistory.user_id == user_id)
            .order_by(PredictionHistory.created_at.desc())
            .all()
        )

        total_predictions = len(records)

        if total_predictions == 0:
            return {
                "total_predictions": 0,
                "average_viral_probability": 0,
                "average_confidence": 0,
                "average_reach": 0,
                "average_likes": 0,
                "best_media_type": None,
                "best_category": None,
                "media_distribution": [],
                "performance_distribution": [],
                "recent_predictions": [],
            }

        total_likes = 0
        total_reach = 0
        total_viral = 0
        total_confidence = 0

        media_counter = Counter()
        category_counter = Counter()
        performance_counter = Counter()

        # Used to calculate average viral probability per category
        category_viral_scores = defaultdict(list)

        recent_predictions = []

        for record in records:

            prediction = record.prediction or {}
            user_input = record.input_data or {}
            recommendation = record.recommendation or {}

            predictions = prediction.get("predictions", {})
            classification = prediction.get("classification", {})
            confidence = prediction.get("confidence", {})

            likes = predictions.get("likes", 0) or 0
            reach = predictions.get("reach", 0) or 0

            viral = classification.get(
                "viral_probability",
                0,
            ) or 0

            bucket = classification.get(
                "performance_bucket",
                "Unknown",
            ) or "Unknown"

            confidence_score = confidence.get(
                "overall_confidence",
                0,
            ) or 0

            media = user_input.get(
                "media_type",
                "Unknown",
            ) or "Unknown"

            category = user_input.get(
                "content_category",
                "Unknown",
            ) or "Unknown"

            # Clean values
            media = str(media).strip()
            category = str(category).strip()

            if not media:
                media = "Unknown"

            if not category:
                category = "Unknown"

            # Convert viral probability safely
            try:
                viral = float(viral)
            except (TypeError, ValueError):
                viral = 0

            try:
                likes = float(likes)
            except (TypeError, ValueError):
                likes = 0

            try:
                reach = float(reach)
            except (TypeError, ValueError):
                reach = 0

            try:
                confidence_score = float(confidence_score)
            except (TypeError, ValueError):
                confidence_score = 0

            total_likes += likes
            total_reach += reach
            total_viral += viral
            total_confidence += confidence_score

            media_counter[media] += 1
            category_counter[category] += 1
            performance_counter[bucket] += 1

            # Store viral score for category performance
            if category != "Unknown":
                category_viral_scores[category].append(viral)

            recent_predictions.append(
                {
                    "id": record.id,
                    "caption": user_input.get("caption", ""),
                    "media_type": media,
                    "content_category": category,
                    "likes": likes,
                    "reach": reach,
                    "viral_probability": viral,
                    "performance_bucket": bucket,
                    "confidence": confidence_score,
                    "created_at": record.created_at.isoformat(),
                    "summary": recommendation.get(
                        "summary",
                        "",
                    ),
                }
            )

        # -----------------------------------------
        # BEST MEDIA TYPE
        # -----------------------------------------

        best_media_type = None

        if media_counter:
            best_media_type = media_counter.most_common(1)[0][0]

        # -----------------------------------------
        # BEST CATEGORY
        # Based on average viral probability
        # -----------------------------------------

        best_category = None

        if category_viral_scores:
            best_category = max(
                category_viral_scores,
                key=lambda category: sum(
                    category_viral_scores[category]
                ) / len(category_viral_scores[category])
            )

        # -----------------------------------------
        # DISTRIBUTIONS
        # -----------------------------------------

        media_distribution = [
            {
                "name": key,
                "value": value,
            }
            for key, value in media_counter.items()
        ]

        performance_distribution = [
            {
                "name": key,
                "value": value,
            }
            for key, value in performance_counter.items()
        ]

        # -----------------------------------------
        # FINAL RESPONSE
        # -----------------------------------------

        return {
            "total_predictions": total_predictions,

            "average_viral_probability": round(
                total_viral / total_predictions,
                1,
            ),

            "average_confidence": round(
                total_confidence / total_predictions,
                1,
            ),

            "average_reach": round(
                total_reach / total_predictions,
                1,
            ),

            "average_likes": round(
                total_likes / total_predictions,
                1,
            ),

            "best_media_type": best_media_type,

            "best_category": best_category,

            "media_distribution": media_distribution,

            "performance_distribution": performance_distribution,

            "recent_predictions": recent_predictions,
        }