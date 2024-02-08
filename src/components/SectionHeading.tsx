import type { ReactNode } from "react";

const SectionHeading = (p: { children: ReactNode }) => {
    return <h2 className="mb-8 text-center text-3xl font-medium capitalize">{p.children}</h2>;
};

export default SectionHeading;
