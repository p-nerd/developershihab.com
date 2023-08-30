import { formatDateToMonthDayYear } from "../../../helpers/date.ts";
import "./preview-blog..css";

const PreviewBlog = ({
    slug,
    publishDate,
    imgAlt,
    img,
    title,
    description,
    tags,
}: {
    slug: string;
    img: string;
    imgAlt: string;
    publishDate: Date;
    title: string;
    description: string;
    tags: string[];
}) => {
    return (
        <li>
            <a
                className="blog-card rounded-xl lg:py-10 py-4 px-1 gap-2 lg:p-5 border border-solid h-max overflow-hidden flex flex-col lg:rounded-3xl"
                href={`/blogs/${slug}`}
            >
                <div className="lg:py-1 lg:px-2">
                    <time
                        className="blog-title  rounded-md lg:py-2 lg:px-4 lg:rounded-2xl m-2 py-1 px-2"
                        dateTime="2023-06-19"
                    >
                        {formatDateToMonthDayYear(publishDate)}
                    </time>
                </div>
                <div className="py-1 px-2 lg:py-2 lg:px-4">
                    <img
                        src={img}
                        alt={imgAlt || ""}
                        loading="lazy"
                        decoding="async"
                        className="object-contain w-full h-full rounded-xl"
                    />
                </div>
                <div className="lg:py-1 lg:px-2">
                    <h2 className="blog-title m-2 py-1 px-2 rounded-md lg:py-2 lg:px-4 lg:rounded-2xl">
                        {title}
                    </h2>
                </div>
                <div className="lg:py-1 lg:px-2">
                    <p className="blog-title m-2 py-1 px-2 rounded-md lg:py-2 lg:px-4 lg:rounded-2xl">
                        {description}
                    </p>
                </div>
                <div className="py-1 lg:py-2 px-2 lg:px-4 flex gap-2 flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="blog-title py-1 px-2 rounded-md lg:py-2 lg:px-4 lg:rounded-2xl"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </a>
        </li>
    );
};

export default PreviewBlog;
