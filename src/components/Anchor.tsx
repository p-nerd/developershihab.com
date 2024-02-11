import type { ReactNode } from "react";

const Anchor = (p: { href: string; className: string; children: ReactNode }) => {
    return (
        <a href={p.href} className={p.className} target="_blank" rel="noopener noreferrer">
            {p.children}
        </a>
    );
};

export default Anchor;
