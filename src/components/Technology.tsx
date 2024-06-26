import { technologies } from "@/site.config";

import Link from "next/link";

const Technology = (p: { technology: string }) => {
    const link = technologies[p.technology] || `https://www.google.com/search?q=${p.technology}`;

    return (
        <Link href={link} target="_blank" className="hover:underline hover:underline-offset-2">
            {p.technology}
        </Link>
    );
};

export default Technology;
