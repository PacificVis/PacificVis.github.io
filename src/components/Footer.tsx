import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/pacificvis-logo.svg"
              alt="PacificVis"
              width={140}
              height={34}
              className="mb-3 brightness-0 invert"
            />
            <p className="text-sm opacity-60 leading-relaxed">
              IEEE Pacific Visualization Conference.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold mb-3 opacity-80">Links</p>
            <ul className="space-y-2 text-sm opacity-60">
              <li>
                <a
                  href="https://tc.computer.org/vgtc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                >
                  IEEE VGTC <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                >
                  IEEE <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold mb-3 opacity-80">Contact</p>
            <p className="text-sm opacity-60 leading-relaxed">
              For inquiries about PacificVis, please contact the current
              conference organizers through the latest edition&apos;s website.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-xs opacity-40">
          <p>&copy; {new Date().getFullYear()} IEEE Pacific Visualization Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
