import { Star } from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import GradientCard from "@/components/cards/GradientCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    followers: "120K Followers",
    review:
      "EngageAI helped me improve my posting strategy. My average engagement increased by almost 35% within a month.",
  },
  {
    name: "Alex Rivera",
    role: "Digital Marketer",
    followers: "Marketing Consultant",
    review:
      "The caption suggestions and engagement predictions are surprisingly accurate. It saves me hours every week.",
  },
  {
    name: "Priya Sharma",
    role: "Lifestyle Influencer",
    followers: "85K Followers",
    review:
      "I love the clean dashboard and AI recommendations. It feels like having a social media manager available 24/7.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionTitle
          title="Loved by Early Users"
          description="See what creators and marketers are saying about EngageAI."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <GradientCard key={item.name}>
              <div className="mb-5 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mb-6 text-foreground/70">
                "{item.review}"
              </p>

              <div>
                <h4 className="font-semibold">{item.name}</h4>

                <p className="text-sm text-foreground/60">
                  {item.role}
                </p>

                <p className="mt-1 text-sm text-purple-300">
                  {item.followers}
                </p>
              </div>
            </GradientCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}