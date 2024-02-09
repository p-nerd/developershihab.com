import Link from "next/link";

import { cn } from "@/lib/utils";

const topsLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
];

const Header = () => {
    return (
        <div className="flex items-center justify-end text-xl">
            {topsLinks.map((x, index) => (
                <div key={index}>
                    <Link
                        href={x.href}
                        className={cn(
                            "rounded-lg px-3 py-1 tracking-tight text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
                            { "font-bold ": index === topsLinks.length - 1 },
                        )}
                    >
                        {x.label}
                    </Link>
                    {index !== topsLinks.length - 1 && ">"}
                </div>
            ))}
        </div>
    );
};

export default Header;
