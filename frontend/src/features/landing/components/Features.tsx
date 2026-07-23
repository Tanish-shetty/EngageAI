import {
  Sparkles,
  BarChart3,
  Clock,
  Hash,
  PenSquare,
  Brain,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import FeatureCard from "@/components/cards/FeatureCard";

const features = [
  {
    icon: <Brain className="h-7 w-7 text-purple-400" />,
    title: "AI Engagement Prediction",
    description:
      "Predict likes, comments, reach and engagement before publishing.",
  },
  {
    icon: <PenSquare className="h-7 w-7 text-pink-400" />,
    title: "Caption Generator",
    description:
      "Generate engaging captions using AI tailored to your audience.",
  },
  {
    icon: <Hash className="h-7 w-7 text-orange-400" />,
    title: "Smart Hashtags",
    description:
      "Receive trending hashtag suggestions to maximize discoverability.",
  },
  {
    icon: <Clock className="h-7 w-7 text-cyan-400" />,
    title: "Best Posting Time",
    description:
      "Know exactly when your audience is most active.",
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-green-400" />,
    title: "Performance Analytics",
    description:
      "Track engagement trends and understand what performs best.",
  },
  {
    icon: <Sparkles className="h-7 w-7 text-yellow-400" />,
    title: "AI Recommendations",
    description:
      "Receive actionable suggestions to improve every post.",
  },
];

export default function Features() {
  return (
    <Section id="features">
      <Container>

        <SectionTitle
          badge="Features"
          title="Everything You Need to Grow"
          description="Powerful AI tools designed to help creators maximize engagement and reach."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}