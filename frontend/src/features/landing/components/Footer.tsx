import { Mail } from "lucide-react";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-black/30">
      <Container>
        <div className="py-16">
          <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>
              <h3 className="mb-4 text-2xl font-bold gradient-text">
                EngageAI
              </h3>

              <p className="text-sm leading-relaxed text-foreground/70">
                AI-powered Instagram growth platform helping creators optimize
                engagement through intelligent predictions, caption generation,
                hashtag recommendations, and performance analytics.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-4 font-semibold">
                Navigation
              </h4>

              <ul className="space-y-3 text-sm text-foreground/70">
                <li>
                  <a
                    href="#features"
                    className="transition-colors hover:text-purple-400"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#how-it-works"
                    className="transition-colors hover:text-purple-400"
                  >
                    How It Works
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="transition-colors hover:text-purple-400"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-semibold">
                Contact
              </h4>

              <div className="space-y-4">

                <a
                  href="mailto:tanishshetty425@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-purple-400"
                >
                  <Mail className="h-4 w-4" />
                  <span>tanishshetty425@gmail.com</span>
                </a>

                <a
                  href="mailto:soumyapatil2005@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-purple-400"
                >
                  <Mail className="h-4 w-4" />
                  <span>soumyapatil2005@gmail.com</span>
                </a>

                <div className="flex items-center gap-5 pt-3">
   <a
    href="https://github.com/Tanish-shetty/EngageAI"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors hover:text-purple-400"
  >
    GitHub
  </a>

</div>

              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-purple-500/10 pt-6 text-center text-sm text-foreground/50">
            © {new Date().getFullYear()} EngageAI. Built with ❤️
          </div>
        </div>
      </Container>
    </footer>
  );
}