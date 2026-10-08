
import { useEffect } from "react";
import charlesPhoto from "@/assets/charles_plp.jpg";
import { CV_PATH } from "./constants";
import { Button } from "@/components/ui/button";

export const ProfessionalSummary = () => {
  // Load Credly badge script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="about" className="section-py bg-white" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <p className="section-label">About</p>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
                The Work Behind the Work
              </h2>
            </div>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                I'm Charles Mbillo, an IT / DevOps professional focused on building and supporting
                reliable business systems. My work sits at the intersection of technology, financial
                operations, data integrity and business processes.
              </p>
              <p>
                I enjoy solving problems where software needs to do more than look good — it needs
                to produce accurate results, protect data and remain dependable in day-to-day
                operations. A sale that completes twice, a stock movement that doesn't reverse on
                a void, a reconciliation that silently misses transactions: these are the kinds of
                problems I take seriously.
              </p>
              <p>
                I've worked on systems covering point-of-sale operations, inventory, payments,
                reconciliation, property management, reporting and production deployments. I'm
                particularly interested in roles where I can combine technical problem-solving
                with operational and financial understanding to make systems more reliable and
                useful.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={CV_PATH} target="_blank" rel="noreferrer" aria-label="Download CV (opens in new tab)">
                <Button className="bg-ink text-white hover:bg-brand transition-colors font-medium">
                  Download CV
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/charles-mbillo"
                target="_blank"
                rel="noreferrer"
                aria-label="View LinkedIn profile (opens in new tab)"
              >
                <Button variant="outline" className="border-surface-border text-ink hover:bg-surface font-medium">
                  LinkedIn
                </Button>
              </a>
            </div>

            {/* Credly badge */}
            <div className="pt-4">
              <div
                data-iframe-width="150"
                data-iframe-height="150"
                data-share-badge-id="1d468bdd-b3f8-4508-b53a-df1a339b4058"
                data-share-badge-host="https://www.credly.com"
                aria-label="AWS Certified Cloud Practitioner badge from Credly"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden border border-surface-border shadow-md aspect-square">
                <img
                  src={charlesPhoto}
                  alt="Charles Mbillo"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width={480}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
