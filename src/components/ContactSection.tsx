
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSignIcon, GlobeIcon, MapPinIcon } from "lucide-react";

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
              Let's Discuss Your Project
            </h2>
            <p className="text-gray-500 md:text-lg">
              Interested in building ethical technology solutions? Get in touch to discuss how we can collaborate.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-purple-700" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <AtSignIcon className="h-5 w-5 text-purple-700" />
                <span>contact@charlesmbillo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-5 w-5 text-purple-700" />
                <span>www.charlesmbillo.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input id="email" placeholder="Your email" type="email" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button className="bg-purple-700 hover:bg-purple-800">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
