"""
=====================================================
EngageAI Viral Score Engine
=====================================================

Computes:

• Viral Probability
• Performance Bucket
• Confidence

using regression predictions.

The score is relative to the account size,
making it far more realistic than fixed thresholds.
=====================================================
"""

from typing import Dict


def clamp(value, minimum=0.0, maximum=1.0):
    return max(minimum, min(value, maximum))


def calculate_viral_score(
    user_input: Dict,
    predictions: Dict,
):
    """
    Build a viral score using predicted engagement.

    Inputs
    ------
    user_input:
        Original user features.

    predictions:
        Output of regression models.
    """

    followers = max(
        user_input["follower_count"],
        1,
    )

    # -----------------------------------------
    # Predicted metrics
    # -----------------------------------------

    likes = predictions["likes"]

    comments = predictions["comments"]

    shares = predictions["shares"]

    saves = predictions["saves"]

    reach = predictions["reach"]

    impressions = predictions["impressions"]

    # -----------------------------------------
    # Ratios relative to followers
    # -----------------------------------------

    like_rate = likes / followers

    comment_rate = comments / followers

    share_rate = shares / followers

    save_rate = saves / followers

    reach_rate = reach / followers

    impression_rate = impressions / followers

    # -----------------------------------------
    # Normalize
    #
    # These values were chosen from common
    # Instagram engagement ranges.
    # -----------------------------------------

    like_score = clamp(like_rate / 0.20)

    comment_score = clamp(comment_rate / 0.05)

    share_score = clamp(share_rate / 0.03)

    save_score = clamp(save_rate / 0.05)

    reach_score = clamp(reach_rate / 3.0)

    impression_score = clamp(impression_rate / 4.0)

    # -----------------------------------------
    # Weighted Score
    # -----------------------------------------

    score = (

        like_score * 0.30 +

        comment_score * 0.15 +

        share_score * 0.20 +

        save_score * 0.15 +

        reach_score * 0.10 +

        impression_score * 0.10

    )

    probability = round(
        score * 100,
        2,
    )

    # -----------------------------------------
    # Bucket
    # -----------------------------------------

    if probability >= 85:

        bucket = "Viral"

    elif probability >= 70:

        bucket = "Excellent"

    elif probability >= 55:

        bucket = "Good"

    elif probability >= 40:

        bucket = "Average"

    else:

        bucket = "Needs Improvement"

    # -----------------------------------------
    # Confidence

    # Higher probability generally means the
    # prediction is more decisive.
    # -----------------------------------------

    confidence = round(

        65 + probability * 0.30,

        2,

    )

    confidence = min(
        confidence,
        99,
    )

    return {

        "viral_probability": probability,

        "viral_prediction": probability >= 70,

        "performance_bucket": bucket,

        "confidence": confidence,

    }