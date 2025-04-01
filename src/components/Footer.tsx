
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-slate-50">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">
              © {currentYear} Charles Mbillo. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Building ethical technology solutions for emerging markets.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-500 hover:text-purple-700">
            <LinkedinIcon className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-500 hover:text-purple-700">
            <TwitterIcon className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-500 hover:text-purple-700">
            <GithubIcon className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
