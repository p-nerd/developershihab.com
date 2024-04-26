import "./globals.css";
import "highlight.js/styles/github-dark.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";

import { person } from "@/site.config";

import { Inter } from "next/font/google";
import { Toaster } from "@/lib/toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeContextProvider } from "@/context/theme-context";
import { ActiveSectionContextProvider } from "@/context/active-section-context";

import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: `${person.name}'s Portfolio`,
    description: `${person.name} is a full-stack developer with 3 years of experience.`,
};

const Layout = (p: { children: ReactNode }) => (
    <html lang="en" className="!scroll-smooth">
        <body
            className={`${inter.className} relative bg-gray-50 text-gray-950 selection:bg-red-500 selection:text-white dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        >
            <ThemeContextProvider>
                <ActiveSectionContextProvider>
                    {p.children}
                    <Footer />
                    <Toaster />
                    <ThemeSwitch />
                </ActiveSectionContextProvider>
            </ThemeContextProvider>
            <Analytics />
            <SpeedInsights />
        </body>
    </html>
);

export { metadata };
export default Layout;
