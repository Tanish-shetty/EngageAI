from datetime import datetime


class FeatureMapper:
    @staticmethod
    def enrich(user_input: dict) -> dict:
        """
        Convert frontend request into an ML-ready feature dictionary.

        Responsibilities:
        - Normalize categorical values
        - Rename API fields to ML feature names
        - Generate calendar features
        - Fill optional analytics defaults
        """

        data = user_input.copy()

        # --------------------------------------------------
        # Normalize text
        # --------------------------------------------------

        data["account_type"] = (
            data["account_type"]
            .strip()
            .lower()
        )

        data["media_type"] = (
            data["media_type"]
            .strip()
            .lower()
        )

        data["content_category"] = (
            data["content_category"]
            .strip()
            .title()
        )

        data["day_of_week"] = (
            data["day_of_week"]
            .strip()
            .title()
        )

        data["traffic_source"] = (
            data["traffic_source"]
            .strip()
        )

        # --------------------------------------------------
        # Rename frontend fields
        # --------------------------------------------------

        data["hashtags_count"] = data.pop("hashtag_count")
        data["post_hour"] = data.pop("posting_hour")

        # --------------------------------------------------
        # Calendar Features
        # --------------------------------------------------

        now = datetime.now()

        month = data.get("month") or now.month

        data["month"] = month

        data["quarter"] = ((month - 1) // 3) + 1

        data["week_of_year"] = now.isocalendar().week

        data["weekend_flag"] = (
            1
            if data["day_of_week"] in ["Saturday", "Sunday"]
            else 0
        )

        # --------------------------------------------------
        # Historical Analytics Defaults
        # --------------------------------------------------

        data.setdefault("engagement_rate", 3.5)

        data.setdefault("followers_gained", 100)

        data.setdefault("total_posts_count", 50)

        data.setdefault(
            "avg_likes_last_10_posts",
            200.0,
        )

        data.setdefault(
            "avg_comments_last_10_posts",
            20.0,
        )

        data.setdefault(
            "avg_engagement_last_10_posts",
            4.0,
        )

        data.setdefault(
            "days_since_last_post",
            2,
        )

        data.setdefault(
            "hours_since_last_post",
            24,
        )

        data.setdefault(
            "posting_frequency_per_week",
            4.0,
        )

        return data