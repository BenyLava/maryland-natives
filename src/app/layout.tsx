import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maryland Natives - Tree Guides & Articles",
  description:
    "Explore native trees and plants of Maryland. Tree catalog, articles, and guides.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/oak-leaf-logo.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} font-sans antialiased text-neutral-900`}
      >
        <div className="min-h-screen flex flex-col bg-[#E6E5A3]">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="border-t border-[#9a8763] bg-[#B09B71] py-6 text-xs text-emerald-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <span>© {new Date().getFullYear()} Maryland Natives. Designed by Ben O</span>
              <span>Inspired by nature and trees everywhere.</span>
            </div>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
