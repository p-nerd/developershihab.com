import { format_date_to_month_day_year } from "@/helpers/time";

const BlogPreview = (p: {
    slug: string;
    img: string;
    img_alt: string;
    publish_date: Date;
    title: string;
    description: string;
    tags: string[];
}) => {
    return (
        <li>
            <a
                class="flex h-max flex-col gap-2 overflow-hidden rounded-xl border border-solid border-sx-gray-800 bg-[#f5f6f9] px-1 py-4 font-sx-font-brand text-xl shadow-sx-shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-sx-shadow-md lg:rounded-3xl lg:p-5 lg:py-10 dark:bg-[#111621]"
                href={`/blogs/${p.slug}`}
            >
                <div class="lg:px-2 lg:py-1">
                    <time
                        class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2"
                        datetime="2023-06-19"
                    >
                        {format_date_to_month_day_year(p.publish_date)}
                    </time>
                </div>
                <div class="px-2 py-1 lg:px-4 lg:py-2">
                    <img
                        src={p.img}
                        alt={p.img_alt || ""}
                        loading="lazy"
                        decoding="async"
                        class="h-full w-full rounded-xl object-contain"
                    />
                </div>
                <div class="lg:px-2 lg:py-1">
                    <h2 class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.title}
                    </h2>
                </div>
                <div class="lg:px-2 lg:py-1">
                    <p class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.description}
                    </p>
                </div>
                <div class="flex flex-wrap gap-2 px-2 py-1 lg:px-4 lg:py-2">
                    {p.tags.map(tag => (
                        <span class="rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                            {tag}
                        </span>
                    ))}
                </div>
            </a>
        </li>
    );
};

export default BlogPreview;
