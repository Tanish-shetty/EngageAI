import numpy as np
import pandas as pd


def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create all engineered features required by the models.
    """

    df = df.copy()

    # -----------------------------------------------------
    # Force numeric columns
    # -----------------------------------------------------

    numeric_columns = [
        "follower_count",
        "caption_length",
        "hashtags_count",
        "post_hour",
        "engagement_rate",
        "followers_gained",
        "weekend_flag",
        "month",
        "week_of_year",
        "quarter",
        "total_posts_count",
        "avg_likes_last_10_posts",
        "avg_comments_last_10_posts",
        "avg_engagement_last_10_posts",
        "days_since_last_post",
        "hours_since_last_post",
        "posting_frequency_per_week",
    ]

    for column in numeric_columns:
        if column in df.columns:
            df[column] = pd.to_numeric(
                df[column],
                errors="coerce",
            )

    # -----------------------------------------------------
    # Followers Log
    # -----------------------------------------------------

    df["followers_log"] = np.log1p(
        df["follower_count"]
    )

    # -----------------------------------------------------
    # Caption per hashtag
    # -----------------------------------------------------

    df["caption_per_hashtag"] = (
        df["caption_length"]
        /
        (df["hashtags_count"] + 1)
    )

    # -----------------------------------------------------
    # Time of day
    # -----------------------------------------------------

    df["is_morning"] = (
        (df["post_hour"] >= 5)
        &
        (df["post_hour"] < 12)
    ).astype(int)

    df["is_afternoon"] = (
        (df["post_hour"] >= 12)
        &
        (df["post_hour"] < 17)
    ).astype(int)

    df["is_evening"] = (
        (df["post_hour"] >= 17)
        &
        (df["post_hour"] < 22)
    ).astype(int)

    df["is_night"] = (
        (df["post_hour"] >= 22)
        |
        (df["post_hour"] < 5)
    ).astype(int)

    # -----------------------------------------------------
    # Posting statistics
    # -----------------------------------------------------

    df["posts_per_day"] = (
        df["posting_frequency_per_week"] / 7.0
    )

    # -----------------------------------------------------
    # Ratios
    # -----------------------------------------------------

    df["avg_like_ratio"] = (
        df["avg_likes_last_10_posts"]
        /
        (df["follower_count"] + 1)
    )

    df["avg_comment_ratio"] = (
        df["avg_comments_last_10_posts"]
        /
        (df["follower_count"] + 1)
    )

    df["avg_engagement_ratio"] = (
        df["avg_engagement_last_10_posts"] / 100
    )

    return df