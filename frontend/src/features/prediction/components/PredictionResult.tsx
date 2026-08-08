import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Eye,
  BarChart3,
  Sparkles,
} from "lucide-react";

import KnowledgeSources from "./KnowledgeSources";
import AIRecommendation from "./AIRecommendation";
import AIContentScore from "./AIContentScore";
import ModelInsights from "./ModelInsights";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import ResultMetric from "@/components/ui/ResultMetric";
import ConfidenceBar from "@/components/ui/ConfidenceBar";
import PerformanceBadge from "@/components/ui/PerformanceBadge";

import PredictionChart from "@/components/ui/PredictionChart";
import WizardCard from "./WizardCard";

interface Props {
  result: any;
  recommendation: any;
  onRestart: () => void;
}

export default function PredictionResult({
  result,
  recommendation,
  onRestart,
}: Props) {
  const prediction = result.predictions;
  const classification = result.classification;
  const confidence = result.confidence;
  const ai = recommendation.ai;

  return (
    <WizardCard
  title="Prediction Complete"
  subtitle="Here's how your post is expected to perform."
>
  <div className="space-y-10">

    {/* Report Header */}

    <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            EngageAI
          </h1>

          <p className="text-foreground/60 mt-1">
            AI Powered Instagram Growth Analysis Report
          </p>

        </div>

        <div className="text-right text-sm text-foreground/60">

          <p>
            Report ID
          </p>

          <p className="font-semibold text-white">
            EA-{Date.now().toString().slice(-6)}
          </p>

          <p className="mt-2">
            {new Date().toLocaleString()}
          </p>

        </div>

      </div>

    </div>

    {/* AI Score */}

    <AIContentScore
      viralProbability={classification.viral_probability}
      confidence={confidence.overall_confidence}
    />

    {/* Metrics */}

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

      <ResultMetric
        title="Likes"
        value={prediction.likes}
        icon={Heart}
      />

      <ResultMetric
        title="Comments"
        value={prediction.comments}
        icon={MessageCircle}
      />

      <ResultMetric
        title="Shares"
        value={prediction.shares}
        icon={Share2}
      />

      <ResultMetric
        title="Saves"
        value={prediction.saves}
        icon={Bookmark}
      />

      <ResultMetric
        title="Reach"
        value={prediction.reach}
        icon={Eye}
      />

      <ResultMetric
        title="Impressions"
        value={prediction.impressions}
        icon={BarChart3}
      />

    </div>

    {/* Model Insights */}

    <ModelInsights
      insights={recommendation.analysis.insights}
    />

    {/* Performance */}

    <div className="rounded-2xl border border-border p-6 space-y-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Performance
        </h2>

        <PerformanceBadge
          bucket={classification.performance_bucket}
        />

      </div>

      <div>

        <p className="text-sm text-foreground/60 mb-2">
          Viral Probability
        </p>

        <h2 className="text-5xl font-bold text-purple-400">
          {classification.viral_probability.toFixed(0)}%
        </h2>

      </div>

      <ConfidenceBar
        value={confidence.overall_confidence}
      />

    </div>

    {/* Analytics */}

    <div className="rounded-2xl border border-border p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Prediction Analytics
      </h2>

      <PredictionChart
        predictions={prediction}
      />

    </div>

    {/* AI Recommendation */}

    <AIRecommendation
      recommendation={recommendation.ai.recommendation}
    />

    {/* Knowledge Sources */}

    <KnowledgeSources
      sources={recommendation.ai.sources}
    />

    {/* Footer */}

    <div className="flex justify-between">

      <Button
        variant="outline"
        onClick={() => window.print()}
      >
        Download Report
      </Button>

      <Button
        onClick={onRestart}
      >
        Predict Another Post
      </Button>

    </div>

  </div>
</WizardCard>
  );
}