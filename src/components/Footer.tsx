
import { Github, Mail, Linkedin } from "lucide-react";
import { SITE_EMAIL, GITHUB_URL } from "./constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-white/10 py-10" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-white">Charles Mbillo</p>
            <p className="text-xs text-white/50 mt-1">
              IT / DevOps · Financial Systems · Reconciliation · POS
            </p>
            <p className="text-xs text-white/40 mt-1">Nairobi, Kenya</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/charles-mbillo"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
              aria-label={`Send email to ${SITE_EMAIL}`}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/40">
            © {currentYear} Charles Mbillo
          </p>
        </div>
      </div>
    </footer>
  );
};
