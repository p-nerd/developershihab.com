const PreviewBlog = () => {
    return (
        <article className="group relative max-w-2xl">
            <div className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
            <svg
                viewBox="0 0 9 9"
                className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block md:mr-12"
            >
                <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                />
            </svg>
            <div className="relative">
                <h3 className="pt-8 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 lg:pt-0">
                    Tailwind CSS v3.4: Dynamic viewport units, :has() support, balanced headlines,
                    subgrid, and more
                </h3>
                <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark mb-4 mt-2 line-clamp-2">
                    <p>
                        There’s nothing like building{" "}
                        <a href="https://twitter.com/steveschoger/status/1732143245696639167">
                            a major new product
                        </a>{" "}
                        for finding all the features you wish you had in your own tools, so we
                        capitalized on some of that inspiration and turned it into this — Tailwind
                        CSS v3.4.
                    </p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                        <time dateTime="2023-12-19T17:45:00.000Z">December 19, 2023</time>
                    </dd>
                </dl>
            </div>
            <a
                className="flex items-center text-sm font-medium text-sky-500"
                href="/blog/tailwindcss-v3-4"
            >
                <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
                <span className="relative">
                    Read more
                    <span className="sr-only">
                        , Tailwind CSS v3.4: Dynamic viewport units, :has() support, balanced
                        headlines, subgrid, and more
                    </span>
                </span>
                <svg
                    className="relative ml-2.5 mt-px overflow-visible text-sky-300 dark:text-sky-700"
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
            </a>
        </article>
    );
};

const PreviewBlogs = () => {
    return (
        <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="absolute bottom-0 right-full top-3 mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block md:mr-[3.25rem]" />
            <div className="space-y-16">
                {[...Array(5).keys()].map(k => (
                    <PreviewBlog key={k} />
                ))}
            </div>
        </div>
    );
};

export default PreviewBlogs;
