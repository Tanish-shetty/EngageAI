import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-orange-500/10" />

      <Container>
        <div className="relative rounded-3xl border border-purple-500/20 bg-white/5 p-12 text-center backdrop-blur-xl">
          <div className="mx-auto max-w-3xl">

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Let AI Supercharge Your Instagram Growth
            </h2>

            <p className="mt-6 text-lg text-foreground/70">
              Predict engagement, generate captions, discover trending hashtags,
              and post at the perfect time all in one platform.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}