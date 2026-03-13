"use client";

import { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    dropdown: [
      {
        title: "About PacificVis",
        description:
          "Mission, history, and scope of the IEEE Pacific Visualization Conference.",
        href: "#about",
      },
      {
        title: "PacificVis Charter",
        description:
          "Governing charter, steering committee structure, and organizational rules.",
        href: "/charter",
      },
    ],
  },
  { label: "Tracks", href: "#tracks" },
  { label: "Resources", href: "#resources" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const open = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  const resolveHref = useCallback(
    (href: string) => {
      if (href.startsWith("#")) return isHome ? href : `/${href}`;
      return href;
    },
    [isHome],
  );

  const activeItem = navItems.find((n) => n.label === activeDropdown);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 nav-blur bg-background border-b border-border"
        onMouseLeave={scheduleClose}
      >
        {/* Top bar */}
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14">
          <Link
            href="/"
            className="flex items-center"
            onMouseEnter={() => setActiveDropdown(null)}
          >
            <Image
              src="/pacificvis-logo.svg"
              alt="PacificVis"
              width={140}
              height={34}
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={resolveHref(item.href)}
                onMouseEnter={() =>
                  item.dropdown
                    ? open(item.label)
                    : setActiveDropdown(null)
                }
                onClick={() => setActiveDropdown(null)}
                className={`relative px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeDropdown === item.label
                    ? "text-foreground"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://pacificvis2026.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveDropdown(null)}
              className="ml-3 text-sm bg-accent hover:bg-accent-hover text-white px-4 py-1.5 rounded-full transition-colors"
            >
              PacificVis 2026
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Mega dropdown (Apple-style) ── */}
        <div
          className={`hidden md:grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
            activeDropdown && activeItem?.dropdown
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="mx-auto max-w-5xl px-6 py-5"
              onMouseEnter={() => activeDropdown && open(activeDropdown)}
            >
              <AnimatePresence mode="wait">
                {activeItem?.dropdown && (
                  <motion.div
                    key={activeDropdown}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className={`grid gap-1 ${
                      activeItem.dropdown.length <= 3
                        ? "grid-cols-2"
                        : "grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {activeItem.dropdown.map((item) => {
                      const inner = (
                        <div className="group flex flex-col gap-1 rounded-xl p-3 hover:bg-accent/5 transition-colors cursor-pointer">
                          <span className="text-sm font-medium flex items-center gap-1.5">
                            {item.title}
                            {item.external ? (
                              <ExternalLink
                                size={11}
                                className="text-text-secondary"
                              />
                            ) : (
                              <ArrowRight
                                size={12}
                                className="text-text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                              />
                            )}
                          </span>
                          <span className="text-xs text-text-secondary leading-relaxed">
                            {item.description}
                          </span>
                        </div>
                      );

                      const close = () => setActiveDropdown(null);

                      if (item.external) {
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={close}
                          >
                            {inner}
                          </a>
                        );
                      }
                      if (item.href.startsWith("#")) {
                        return (
                          <a
                            key={item.title}
                            href={resolveHref(item.href)}
                            onClick={close}
                          >
                            {inner}
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={close}
                        >
                          {inner}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-foreground"
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <div className="ml-3 mt-2 flex flex-col gap-2 border-l border-border pl-3">
                        {item.dropdown.map((sub) => {
                          if (sub.external) {
                            return (
                              <a
                                key={sub.title}
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="text-xs text-text-secondary hover:text-foreground transition-colors flex items-center gap-1"
                              >
                                {sub.title} <ExternalLink size={10} />
                              </a>
                            );
                          }
                          if (sub.href.startsWith("#")) {
                            return (
                              <a
                                key={sub.title}
                                href={resolveHref(sub.href)}
                                onClick={() => setMobileOpen(false)}
                                className="text-xs text-text-secondary hover:text-foreground transition-colors"
                              >
                                {sub.title}
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-xs text-text-secondary hover:text-foreground transition-colors"
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="https://pacificvis2026.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-accent text-white px-4 py-2 rounded-full text-center transition-colors hover:bg-accent-hover"
                >
                  PacificVis 2026
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Backdrop overlay ── */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
