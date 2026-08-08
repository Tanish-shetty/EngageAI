from datetime import datetime


class FeatureMapper:
    @staticmethod
    def enrich(user_input: dict) -> dict:
        """
        Convert frontend request into an ML-ready feature dictionary.
        """

        data = user_input.copy()

        # --------------------------------------------------
        # Normalize text
        # --------------------------------------------------

        data["account_type"] = str(
            data.get("account_type", "creator")
        ).strip().lower()

        data["media_type"] = str(
            data.get("media_type", "reel")
        ).strip().lower()

        data["content_category"] = str(
            data.get("content_category", "Technology")
        ).strip().title()

        data["day_of_week"] = str(
            data.get("day_of_week", "Monday")
        ).strip().title()

        data["traffic_source"] = str(
            data.get("traffic_source", "Explore")
        ).strip()

        # --------------------------------------------------
        # Rename frontend fields
        # --------------------------------------------------

        if "hashtag_count" in data:
            data["hashtags_count"] = data.pop("hashtag_count")

        if "posting_hour" in data:
            data["post_hour"] = data.pop("posting_hour")

        # --------------------------------------------------
        # Calendar Features
        # --------------------------------------------------

        now = datetime.now()

        month = int(data.get("month") or now.month)

        data["month"] = month

        data["quarter"] = ((month - 1) // 3) + 1

        data["week_of_year"] = now.isocalendar().week

        data["weekend_flag"] = (
            1
            if data["day_of_week"] in ["Saturday", "Sunday"]
            else 0
        )

        # --------------------------------------------------
        # Safe numeric conversion
        # --------------------------------------------------

        data["follower_count"] = int(
            data.get("follower_count") or 0
        )

        data["caption_length"] = int(
            data.get("caption_length") or 0
        )

        data["hashtags_count"] = int(
            data.get("hashtags_count") or 0
        )

        data["post_hour"] = int(
            data.get("post_hour") or 12
        )

        data["engagement_rate"] = float(
            data.get("engagement_rate") or 3.5
        )

        data["followers_gained"] = int(
            data.get("followers_gained") or 100
        )

        data["total_posts_count"] = int(
            data.get("total_posts_count") or 50
        )

        data["avg_likes_last_10_posts"] = float(
            data.get("avg_likes_last_10_posts") or 200
        )

        data["avg_comments_last_10_posts"] = float(
            data.get("avg_comments_last_10_posts") or 20
        )

        data["avg_engagement_last_10_posts"] = float(
            data.get("avg_engagement_last_10_posts") or 4
        )

        data["days_since_last_post"] = int(
            data.get("days_since_last_post") or 2
        )

        data["hours_since_last_post"] = int(
            data.get("hours_since_last_post") or 24
        )

        data["posting_frequency_per_week"] = float(
            data.get("posting_frequency_per_week") or 4.0
        )

        return data