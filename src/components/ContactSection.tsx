
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSignIcon, PhoneIcon, GlobeIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Direct Contact
            </h2>
            <p className="text-gray-500 md:text-lg">
              Interested in building ethical technology solutions? Get in touch to discuss how we can collaborate.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-purple-700" />
                <a href="tel:+254111810434" className="hover:text-purple-700 transition-colors">+254 111 810 434</a>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-5 w-5 text-purple-700" />
                <a href="https://wa.me/254111810434" className="hover:text-purple-700 transition-colors">WhatsApp Chat</a>
              </div>
              <div className="flex items-center gap-2">
                <AtSignIcon className="h-5 w-5 text-purple-700" />
                <a href="mailto:mbillocharles@gmail.com" className="hover:text-purple-700 transition-colors">mbillocharles@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <form className="grid gap-4" action="https://formspree.io/f/xblgrkln" method="POST">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input id="email" name="email" placeholder="Your email" type="email" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message" className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="bg-purple-700 hover:bg-purple-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
