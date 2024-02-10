import Link from "next/link";
import { cn } from "@/lib/utils";

export type TBreadCrumb = {
    label: string;
    href: string;
};

const BreadCrumb = (p: { links: TBreadCrumb[] }) => {
    return (
        <div className="flex items-center justify-end text-xl">
            {p.links.map((x, index) => (
                <div key={index}>
                    <Link
                        href={x.href}
                        className={cn(
                            "rounded-lg px-3 py-1 tracking-tight text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
                            { "font-bold ": index === p.links.length - 1 },
                        )}
                    >
                        {x.label}
                    </Link>
                    {index !== p.links.length - 1 && ">"}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumb;
