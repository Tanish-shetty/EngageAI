import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import StepCard from "@/components/cards/StepCard";

const steps = [
  {
    step: "01",
    title: "Upload Your Content",
    description:
      "Paste your Instagram caption or upload your post draft for analysis.",
  },
  {
    step: "02",
    title: "AI Analysis",
    description:
      "Our AI predicts engagement, analyzes sentiment, and evaluates performance.",
  },
  {
    step: "03",
    title: "Optimize & Publish",
    description:
      "Receive captions, hashtags, posting time, and improvement suggestions.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>

        <SectionTitle
          title="How EngageAI Works"
          description="Three simple steps to maximize your Instagram performance."
        />

        <div className="relative grid gap-12 md:grid-cols-3">

          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 md:block" />

          {steps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}