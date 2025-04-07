
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-slate-50 py-8">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <p className="text-center text-sm text-gray-500">
          © {currentYear} Charles Mbillo. Bridging Technology and Real-World Impact. T&C. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/yourprofile" className="rounded-full text-gray-500 hover:text-purple-700 transition-colors" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="https://github.com/yourprofile" className="rounded-full text-gray-500 hover:text-purple-700 transition-colors" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/yourprofile" className="rounded-full text-gray-500 hover:text-purple-700 transition-colors" target="_blank" rel="noreferrer" aria-label="Twitter">
            <TwitterIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
