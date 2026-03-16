"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trees", label: "Tree Catalog" },
  { href: "/articles", label: "Articles" },
  { href: "/quiz", label: "Quiz" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#9a8763] bg-[#9ADE7B] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/oak-leaf-logo.svg"
            alt="Oak leaf logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{
              color: "#557153",
              WebkitTextStroke: "4px black",
              paintOrder: "stroke fill",
            }}
          >
            Maryland Natives
          </span>
        </Link>

        {/* Desktop nav - hidden on mobile */}
        <nav
          className="hidden items-center gap-4 text-lg font-bold md:flex"
          style={{ color: "#557153" }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-1 hover:bg-[#6b7c5b]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button - visible only on mobile */}
        <button
          type="button"
          className="flex flex-col justify-center gap-1.5 rounded-md p-2 md:hidden"
          style={{ color: "#557153" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown - visible when menuOpen */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out md:hidden ${menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ backgroundColor: "#D8CCA3" }}
      >
        <nav
          className="flex flex-col gap-1 border-t border-[#9a8763] px-4 pb-4 pt-2"
          style={{ color: "#557153" }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-3 text-lg font-bold hover:bg-[#6b7c5b]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
