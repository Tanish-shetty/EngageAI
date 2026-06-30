"""
=====================================================
EngageAI Feature Engineering
=====================================================

This module creates engineered features used by both
training and inference.

Never duplicate feature engineering logic elsewhere.
=====================================================
"""

import numpy as np
import pandas as pd


def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create all engineered features required by the models.
    """

    df = df.copy()

    # =====================================================
    # Followers Log
    # =====================================================

    df["followers_log"] = np.log1p(
        df["follower_count"]
    )

    # =====================================================
    # Caption Per Hashtag
    # =====================================================

    df["caption_per_hashtag"] = (
        df["caption_length"]
        /
        (df["hashtags_count"] + 1)
    )

    # =====================================================
    # Time Of Day
    # =====================================================

    df["is_morning"] = (
        (
            df["post_hour"] >= 5
        )
        &
        (
            df["post_hour"] < 12
        )
    ).astype(int)

    df["is_afternoon"] = (
        (
            df["post_hour"] >= 12
        )
        &
        (
            df["post_hour"] < 17
        )
    ).astype(int)

    df["is_evening"] = (
        (
            df["post_hour"] >= 17
        )
        &
        (
            df["post_hour"] < 22
        )
    ).astype(int)

    df["is_night"] = (
        (
            df["post_hour"] >= 22
        )
        |
        (
            df["post_hour"] < 5
        )
    ).astype(int)

    # =====================================================
    # Posting Statistics
    # =====================================================

    df["posts_per_day"] = (
        df["posting_frequency_per_week"]
        / 7
    )

    # =====================================================
    # Ratios
    # =====================================================

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
        df["avg_engagement_last_10_posts"]
        /
        100
    )

    return df