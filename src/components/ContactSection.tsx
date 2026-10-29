
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE, GITHUB_URL, SITE_WHATSAPP } from "./constants";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-py bg-ink" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Positioning */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
                Get in Touch
              </p>
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Let's solve a problem.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Looking for someone who can bridge technology, financial operations and business
                systems? I'd be happy to discuss an opportunity, project or collaboration.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                aria-label={`Email ${SITE_EMAIL}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm">{SITE_EMAIL}</span>
              </a>

              <a
                href={`tel:${SITE_PHONE}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                aria-label={`Call ${SITE_PHONE}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm">+254 111 810 434</span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                aria-label="GitHub profile (opens in new tab)"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm">github.com/CharlesMbillo</span>
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={`mailto:${SITE_EMAIL}`}>
                <Button
                  size="sm"
                  className="bg-brand text-white hover:bg-brand/90 font-medium gap-2"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Me
                </Button>
              </a>
              <a href={SITE_WHATSAPP} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 font-medium"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xblgrkln"
              method="POST"
              aria-label="Contact form"
            >
              <div className="grid gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-brand focus-visible:border-brand"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-brand focus-visible:border-brand"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about the problem you're trying to solve…"
                  className="min-h-[140px] bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-brand focus-visible:border-brand resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand hover:bg-brand/90 text-white font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
