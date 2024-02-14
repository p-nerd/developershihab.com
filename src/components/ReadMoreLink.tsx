import Link from "next/link";

const ReadMoreLink = (p: { href: string; className?: string; iconClassName?: string }) => {
    return (
        <Link
            className={`flex items-center text-sm font-medium text-sky-500 ${p.className}`}
            href={p.href}
        >
            <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
            <span className="relative">Read more</span>
            <svg
                className={`relative ml-2.5 mt-px overflow-visible text-sky-500 dark:text-sky-700 ${p.iconClassName}`}
                width={3}
                height={6}
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M0 0L3 3L0 6" />
            </svg>
        </Link>
    );
};

export default ReadMoreLink;
