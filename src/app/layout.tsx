import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maryland Natives - Tree Guides & Articles",
  description:
    "Explore native trees and plants of Maryland. Tree catalog, articles, and guides.",
  icons: {
    icon: "/oak-leaf-logo.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-neutral-900`}
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
              <span>© {new Date().getFullYear()} Maryland Natives.</span>
              <span>Inspired by nature and trees everywhere.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
