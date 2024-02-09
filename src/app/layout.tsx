import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

import person from "@/conf/person";

import Header from "./Header";
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
            className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
        >
            <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
            <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

            <ThemeContextProvider>
                <ActiveSectionContextProvider>
                    <Header />
                    {p.children}
                    <Footer />

                    <Toaster position="top-right" />
                    <ThemeSwitch />
                </ActiveSectionContextProvider>
            </ThemeContextProvider>
        </body>
    </html>
);

export { metadata };
export default Layout;
