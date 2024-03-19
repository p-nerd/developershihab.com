"use client";

import type { SectionName } from "@/hooks/useSectionInView";
import type { Dispatch, ReactNode, SetStateAction } from "react";

import { useState, createContext, useContext } from "react";

type TActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<TActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = (p: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {p.children}
        </ActiveSectionContext.Provider>
    );
};

const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider",
        );
    }

    return context;
};

export { ActiveSectionContextProvider, useActiveSectionContext };
