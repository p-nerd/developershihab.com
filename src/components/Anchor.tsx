import type { ReactNode } from "react";

const Anchor = (p: { href: string; className: string; children: ReactNode }) => {
    return (
        <a href={p.href} className={p.className} target="_blank" rel="noopener noreferrer">
            ByteGrad
        </a>
    );
};

export default Anchor;
