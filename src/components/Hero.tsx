
import charlesPhoto from "@/assets/charles_plp.jpg";
import { Button } from "@/components/ui/button";
import { CV_PATH, GITHUB_URL } from "./constants";
import { MapPin, ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative bg-white border-b border-surface-border"
      aria-label="Introduction"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-20 md:py-28 items-center">

          {/* Left: Text content */}
          <div className="order-1 lg:order-1 space-y-6">
            <p className="section-label">IT / DevOps &amp; Financial Systems</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
              Charles<br />
              <span className="text-brand">Mbillo</span>
            </h1>

            <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-lg">
              I build and support reliable business systems across POS, inventory,
              financial operations, reconciliation and production technology.
            </p>

            <p className="text-base text-ink-muted leading-relaxed max-w-lg">
              From production POS platforms to housing-management systems, I focus
              on making technology reliable, auditable and useful to the people
              running the business.
            </p>

            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <MapPin className="h-4 w-4 text-brand flex-shrink-0" aria-hidden="true" />
              <span>Nairobi, Kenya · Open to remote opportunities</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={scrollToWork}
                className="bg-ink text-white hover:bg-brand transition-colors font-medium px-6"
              >
                View My Work
              </Button>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noreferrer"
                aria-label="Download Charles Mbillo's CV (opens in new tab)"
              >
                <Button
                  variant="outline"
                  className="border-ink text-ink hover:bg-surface font-medium px-6"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative pr-2 pb-2 sm:pr-4 sm:pb-4">
              {/* Decorative border offset */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-brand translate-x-1.5 translate-y-1.5 sm:translate-x-3 sm:translate-y-3"
                aria-hidden="true"
              />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-surface-border shadow-lg">
                <img
                  src={charlesPhoto}
                  alt="Charles Mbillo — IT / DevOps and Financial Systems Professional"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  width={384}
                  height={384}
                />
              </div>
              {/* Credential badge overlay */}
              <div className="absolute -bottom-2 left-2 sm:-bottom-3 sm:-left-3 bg-white border border-surface-border rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-md">
                <p className="text-xs font-semibold text-ink">AWS Certified</p>
                <p className="text-[11px] sm:text-xs text-ink-muted">Cloud Practitioner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <button
            onClick={scrollToWork}
            className="flex flex-col items-center gap-1 text-xs text-ink-muted hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
            aria-label="Scroll to selected work"
          >
            <span className="tracking-widest uppercase text-[10px]">Work</span>
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
