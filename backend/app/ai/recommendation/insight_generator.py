"""
=========================================
Prediction Insight Generator
=========================================

Converts ML predictions into structured
business insights for the LLM.
"""


class InsightGenerator:

    @staticmethod
    def generate(predictions: dict) -> dict:

        prediction_values = predictions["predictions"]
        classification = predictions["classification"]

        insights = {
            "strengths": [],
            "weaknesses": [],
            "priorities": [],
        }

        # -------------------------------------------------
        # Viral
        # -------------------------------------------------

        if classification["viral_prediction"]:
            insights["strengths"].append(
                "This post has a high probability of becoming viral."
            )
        else:
            insights["weaknesses"].append(
                "Viral probability is currently low."
            )
            insights["priorities"].append(
                "Improve the hook and increase shareability."
            )

        # -------------------------------------------------
        # Performance
        # -------------------------------------------------

        bucket = classification["performance_bucket"]

        if bucket == "high":
            insights["strengths"].append(
                "Overall engagement prediction is high."
            )

        elif bucket == "medium":
            insights["priorities"].append(
                "Improve engagement to reach the high-performance category."
            )

        else:
            insights["weaknesses"].append(
                "Predicted engagement is below average."
            )

        # -------------------------------------------------
        # Shares
        # -------------------------------------------------

        if prediction_values["shares"] < 20:
            insights["weaknesses"].append(
                "Predicted shares are low."
            )

            insights["priorities"].append(
                "Create content that encourages sharing."
            )

        # -------------------------------------------------
        # Saves
        # -------------------------------------------------

        if prediction_values["saves"] < 50:
            insights["priorities"].append(
                "Increase educational or evergreen value to improve saves."
            )

        # -------------------------------------------------
        # Reach
        # -------------------------------------------------

        if prediction_values["reach"] > 5000:
            insights["strengths"].append(
                "Reach prediction is strong."
            )

        return insights