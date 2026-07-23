import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";

const faqs = [
  {
    question: "Is EngageAI completely free?",
    answer:
      "Yes. EngageAI is free during the beta phase. There are no subscriptions or hidden charges.",
  },
  {
    question: "How accurate are the AI predictions?",
    answer:
      "Our AI models analyze historical engagement patterns, captions, hashtags, and posting times to provide highly reliable engagement predictions.",
  },
  {
    question: "Can I connect my Instagram account?",
    answer:
      "Yes. You can securely connect your Instagram account to receive personalized recommendations and analytics.",
  },
  {
    question: "Does EngageAI generate captions and hashtags?",
    answer:
      "Absolutely. EngageAI suggests optimized captions, trending hashtags, and the best posting time for maximum reach.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about EngageAI."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-foreground/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}