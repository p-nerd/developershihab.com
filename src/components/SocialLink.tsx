import type { ReactNode } from "react";
import Anchor from "./Anchor";

const SocialLink = (p: { href: string; icon: ReactNode; ariaLabel: string }) => {
    return (
        <Anchor
            ariaLabel={p.ariaLabel}
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href={p.href}
        >
            {p.icon}
        </Anchor>
    );
};

export default SocialLink;
