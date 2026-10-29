import { useEffect } from "react";
import charlesPhoto from "@/assets/charles_plp.jpg";
import { CV_PATH, LINKEDIN_URL } from "./constants";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Phone } from "lucide-react";

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

          {/* Left: Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <p className="section-label">Professional Summary</p>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
                Systems Troubleshooting Meets Modern Cloud &amp; DevOps
              </h2>
            </div>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p className="text-ink font-medium text-base">
                Results-driven IT Professional with <strong>10+ years of hands-on experience (2014 – Present)</strong> in
                business systems support, data management, operational reliability, and IT infrastructure automation.
              </p>
              <p>
                Combines deep systems troubleshooting capabilities with modern cloud and application engineering expertise.
                AWS Certified Cloud Practitioner (Gold Class, 2024) holding a Diploma in Information Technology from the
                Government Training Institute (G.T.I.) Embu.
              </p>
              <p>
                Demonstrated track record designing and deploying enterprise-grade business applications, including the live
                <strong> Jimwas Enterprises POS</strong> (React, Supabase PostgreSQL, M-Pesa Daraja, KCB Buni) and
                real-time bank reconciliation workflows (Equity Bank Biller API &amp; IPN). Dedicated to ensuring rock-solid
                network availability, data security, workstation and server integrity, and proactive user support.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={CV_PATH} target="_blank" rel="noreferrer" aria-label="Download CV (opens in new tab)">
                <Button className="bg-ink text-white hover:bg-brand transition-colors font-medium">
                  Download Full CV
                </Button>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="View LinkedIn profile (opens in new tab)"
              >
                <Button variant="outline" className="border-surface-border text-ink hover:bg-surface font-medium">
                  LinkedIn Profile
                </Button>
              </a>
            </div>

            {/* Credly badge */}
            <div className="pt-2">
              <div
                data-iframe-width="150"
                data-iframe-height="150"
                data-share-badge-id="1d468bdd-b3f8-4508-b53a-df1a339b4058"
                data-share-badge-host="https://www.credly.com"
                aria-label="AWS Certified Cloud Practitioner badge from Credly"
              />
            </div>
          </div>

          {/* Right: Photo & Quick Credentials */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden border border-surface-border shadow-md aspect-square">
                <img
                  src={charlesPhoto}
                  alt="Charles Mbillo — IT Officer & DevOps Professional"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width={480}
                  height={480}
                />
              </div>
            </div>

            {/* Snapshot Stats Card */}
            <div className="w-full max-w-sm bg-surface border border-surface-border rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Experience</span>
                <span className="font-bold text-ink">10+ Years (2014 – Present)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Data Validation Accuracy</span>
                <span className="font-bold text-brand">99.9% Verified Record</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Manual Reconciliation</span>
                <span className="font-bold text-ink">Reduced by &gt;60%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Primary Location</span>
                <span className="font-semibold text-ink">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div className="mt-16 pt-12 border-t border-surface-border grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div className="bg-surface rounded-xl p-6 border border-surface-border">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider">Formal Education</h3>
            </div>
            <ul className="space-y-4">
              <li className="border-b border-surface-border/60 pb-3 last:border-0 last:pb-0">
                <p className="text-sm font-semibold text-ink">Diploma in Information Technology</p>
                <p className="text-xs text-ink-muted mt-0.5">Government Training Institute (G.T.I.), Embu · 2008</p>
              </li>
              <li>
                <p className="text-sm font-semibold text-ink">Kenya Certificate of Secondary Education (KCSE)</p>
                <p className="text-xs text-ink-muted mt-0.5">Parklands Secondary School</p>
              </li>
            </ul>
          </div>

          {/* Professional Certifications & Specialized Training */}
          <div className="bg-surface rounded-xl p-6 border border-surface-border">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center">
                <Award className="h-4 w-4 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider">Certifications &amp; Training</h3>
            </div>
            <ul className="space-y-3">
              <li className="border-b border-surface-border/60 pb-2.5">
                <p className="text-sm font-semibold text-ink">AWS re/Start — Certified Cloud Practitioner (Gold Class)</p>
                <p className="text-xs text-ink-muted">Amazon Web Services / Ajira eMobilis · 2024</p>
              </li>
              <li className="border-b border-surface-border/60 pb-2.5">
                <p className="text-sm font-semibold text-ink">Web Development Professional Certification</p>
                <p className="text-xs text-ink-muted">PLP Academy · 2023</p>
              </li>
              <li className="border-b border-surface-border/60 pb-2.5">
                <p className="text-sm font-semibold text-ink">Database Management, Data Validation &amp; Quality Control</p>
                <p className="text-xs text-ink-muted">Ajira Digital Program · 2022</p>
              </li>
              <li>
                <p className="text-sm font-semibold text-ink">Virtual Assistant &amp; Digital Operations Certification</p>
                <p className="text-xs text-ink-muted">Ajira Digital Program · 2022</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Referees */}
        <div className="mt-8 bg-surface rounded-xl p-6 border border-surface-border">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center">
              <Users className="h-4 w-4 text-brand" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-ink uppercase tracking-wider">Professional Referees</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-surface-border">
              <p className="text-sm font-bold text-ink">Mr. Benson Mutua</p>
              <p className="text-xs text-ink-muted mt-0.5">AWS Instructor — Ajira eMobilis</p>
              <p className="text-xs text-brand font-medium mt-2 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                +254 713 856 679
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-surface-border">
              <p className="text-sm font-bold text-ink">Rev. Fr. Joram Ng'ang'a</p>
              <p className="text-xs text-ink-muted mt-0.5">Catholic Diocese of Eldoret</p>
              <p className="text-xs text-brand font-medium mt-2 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                +254 724 896 454
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
