import Link from "next/link";

const GoBack = (p: { href: string }) => {
    return (
        <div className="max-w-8xl mx-auto">
            <div className="flex px-4 pb-10 pt-8 lg:px-8">
                <Link
                    className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                    href={p.href}
                >
                    <svg
                        viewBox="0 -9 3 24"
                        className="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    >
                        <path
                            d="M3 0L0 3L3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Go back
                </Link>
            </div>
        </div>
    );
};

export default GoBack;
