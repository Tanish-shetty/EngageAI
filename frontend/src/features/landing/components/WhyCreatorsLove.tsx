import {
  Brain,
  Sparkles,
  TrendingUp,
  Hash,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";

import FeatureCard from "@/components/cards/FeatureCard";
import StatCard from "@/components/cards/StatCard";

export default function WhyCreatorsLove() {
  return (
    <Section
  id="why-creators"
  className="relative overflow-hidden"
>
      <Container>

        <SectionTitle
          title="Why Creators Love EngageAI"
          description="Built specifically for modern creators who want better engagement without spending hours analyzing posts."
        />

        {/* Statistics */}

        <div className="mb-16 grid gap-6 md:grid-cols-3">

          <StatCard
            value="98%"
            label="Prediction Accuracy"
          />

          <StatCard
            value="3×"
            label="Faster Content Planning"
          />

          <StatCard
            value="24/7"
            label="AI Assistance"
          />

        </div>

        {/* Benefits */}

        <div className="grid gap-8 md:grid-cols-2">

          <FeatureCard
            icon={<Brain className="h-7 w-7 text-purple-400" />}
            title="Smarter Predictions"
            description="Know expected reach, likes and engagement before you publish."
          />

          <FeatureCard
            icon={<Sparkles className="h-7 w-7 text-pink-400" />}
            title="AI Caption Generator"
            description="Generate captions that match your audience and niche."
          />

          <FeatureCard
            icon={<Hash className="h-7 w-7 text-orange-400" />}
            title="Trending Hashtags"
            description="Receive hashtags with maximum discoverability."
          />

          <FeatureCard
            icon={<TrendingUp className="h-7 w-7 text-green-400" />}
            title="Growth Insights"
            description="Understand what's working and continuously improve your content."
          />

        </div>
<div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </Container>
    </Section>
  );
}