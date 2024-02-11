"use client";

import { useEffect, useState, createContext, useContext, type ReactNode } from "react";

type TTheme = "light" | "dark";

type TThemeContextType = {
    theme: TTheme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<TThemeContextType | null>(null);

const ThemeContextProvider = (p: { children: ReactNode }) => {
    const [theme, setTheme] = useState<TTheme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as TTheme | null;

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {p.children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
};

export { ThemeContextProvider, useTheme };
