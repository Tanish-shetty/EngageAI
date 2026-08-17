import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Step1Account from "./Step1Account";
import Step2Post from "./Step2Post";
import Step3History from "./Step3History";
import StepIndicator from "./StepIndicator";
import PredictionResult from "./PredictionResult";

import { predictPost } from "../api/predictionApi";
import { getRecommendation } from "../api/recommendationApi";

import { transformPredictionData } from "../utils";
import { transformRecommendationData } from "../transformRecommendationData";

export interface PredictionData {
  // Step 1
  account_type: string;
  follower_count: number;
  engagement_rate: number;

  // Step 2
  caption: string;
  media_type: string;
  content_category: string;
  traffic_source: string;
  has_call_to_action: boolean;

  post_date: string;
  post_time: string;

  // Step 3
  avg_likes_last_10_posts: number;
  avg_comments_last_10_posts: number;
  followers_gained: number;
  total_posts_count: number;
  avg_engagement_last_10_posts: number;

  posting_frequency: string;
  last_post_date: string;
}

export default function PredictionWizard() {
  const methods = useForm();

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [prediction, setPrediction] = useState<any>(null);

  const [recommendation, setRecommendation] =
    useState<any>(null);

  const [error, setError] = useState<string | null>(null);

  const [predictionData, setPredictionData] =
    useState<PredictionData>({
      // Step 1
      account_type: "Creator",
      follower_count: 0,
      engagement_rate: 0,

      // Step 2
      caption: "",
      media_type: "",
      content_category: "",
      traffic_source: "",
      has_call_to_action: false,

      post_date: "",
      post_time: "",

      // Step 3
      avg_likes_last_10_posts: 0,
      avg_comments_last_10_posts: 0,
      followers_gained: 0,
      total_posts_count: 0,
      avg_engagement_last_10_posts: 0,

      posting_frequency: "4",
      last_post_date: "",
    });

  const handlePrediction = async () => {
    try {
      setLoading(true);
      setError(null);

      setPrediction(null);
      setRecommendation(null);

      console.log("🚀 Starting prediction...");

      // --------------------------------
      // Prediction API
      // --------------------------------

      const predictionPayload =
        transformPredictionData(predictionData);

      console.log(
        "📤 Prediction payload:",
        predictionPayload
      );

      const predictionResponse =
        await predictPost(predictionPayload);

      console.log(
        "✅ Prediction response:",
        predictionResponse
      );

      setPrediction(predictionResponse);

      // --------------------------------
      // Recommendation API
      // --------------------------------

      const recommendationPayload =
        transformRecommendationData(predictionData);

      console.log(
        "📤 Recommendation payload:",
        recommendationPayload
      );

      const recommendationResponse =
        await getRecommendation(
          recommendationPayload
        );

      console.log(
        "✅ Recommendation response:",
        recommendationResponse
      );

      setRecommendation(recommendationResponse);

      console.log("🎉 Prediction process completed!");

    } catch (err: any) {
      console.error(
        "❌ Prediction process failed:",
        err
      );

      const errorMessage =
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err?.message ||
        "Unable to generate prediction. Please try again.";

      setError(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setPrediction(null);
    setRecommendation(null);
    setError(null);
    setStep(1);
  };

  return (
    <FormProvider {...methods}>
      <div className="relative">

        {/* ========================================= */}
        {/* Loading Screen */}
        {/* ========================================= */}

        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-2xl border border-purple-500/20 bg-[#111114] p-8 text-center shadow-2xl">

              {/* Spinner */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />

              <h2 className="text-2xl font-bold text-white">
                Analyzing Your Post
              </h2>

              <p className="mt-3 text-sm text-white/60">
                Our AI is predicting your post performance
                and generating personalized recommendations.
              </p>

              {/* Loading steps */}
              <div className="mt-6 space-y-3 text-left">

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-500" />

                  <span className="text-sm text-white/70">
                    Analyzing post performance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-pink-500" />

                  <span className="text-sm text-white/70">
                    Generating AI recommendations
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

                  <span className="text-sm text-white/70">
                    Preparing your results
                  </span>
                </div>

              </div>

              <p className="mt-6 text-xs text-white/40">
                Please don't close or refresh this page.
              </p>

            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* Error Screen */}
        {/* ========================================= */}

        {!loading && error && (
          <div className="flex min-h-[500px] items-center justify-center">

            <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-[#111114] p-8 text-center shadow-2xl">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                <span className="text-2xl">
                  ⚠️
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Prediction Failed
              </h2>

              <p className="mt-3 text-sm text-white/60">
                {error}
              </p>

              <button
                type="button"
                onClick={() => {
                  setError(null);
                  handlePrediction();
                }}
                className="mt-6 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Try Again
              </button>

            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* Prediction Wizard */}
        {/* ========================================= */}

        {!loading && !error && !prediction && (
          <>
            <div className="mb-10 text-center">

              <h1 className="text-4xl font-bold">
                AI Viral Prediction
              </h1>

              <p className="mt-3 text-foreground/60">
                Predict your Instagram performance before
                publishing.
              </p>

            </div>

            <StepIndicator currentStep={step} />

            {/* Step 1 */}
            {step === 1 && (
              <Step1Account
                data={predictionData}
                setData={setPredictionData}
                onNext={() => setStep(2)}
              />
            )}

            {/* Step 2 */}
            {step === 2 && (
              <Step2Post
                data={predictionData}
                setData={setPredictionData}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}

            {/* Step 3 */}
            {step === 3 && (
              <Step3History
                data={predictionData}
                setData={setPredictionData}
                onBack={() => setStep(2)}
                onPredict={handlePrediction}
                loading={loading}
              />
            )}
          </>
        )}

        {/* ========================================= */}
        {/* Prediction Result */}
        {/* ========================================= */}

        {!loading &&
          !error &&
          prediction &&
          recommendation && (
            <PredictionResult
              result={prediction}
              recommendation={recommendation}
              onRestart={handleRestart}
            />
          )}

      </div>
    </FormProvider>
  );
}