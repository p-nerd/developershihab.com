import { type JSX } from "solid-js";

const ProjectContent = (p: {
    img?: string;
    img_alt?: string;
    imgLink?: string;
    children: JSX.Element;
}) => {
    return (
        <main class="m-auto w-full p-5">
            <div class="m-auto flex w-full flex-col gap-10 lg:max-w-[90ch]">
                {p.img && (
                    <div class="w-full rounded-lg border-2 border-[#e3e6ee] shadow-2xl dark:border-[#283044] dark:shadow-gray-600">
                        {p.imgLink ? (
                            <a href={p.imgLink}>
                                <img
                                    src={p.img}
                                    alt={p.img_alt || ""}
                                    class="w-full rounded-lg "
                                />
                            </a>
                        ) : (
                            <img
                                src={p.img}
                                alt={p.img_alt || ""}
                                class="w-full rounded-lg "
                            />
                        )}
                    </div>
                )}
                <div class="w-full rounded-lg border-2 border-[#e3e6ee] shadow-2xl dark:border-[#283044] dark:shadow-gray-600">
                    <article class="prose prose-neutral w-full max-w-none p-[0.5rem] text-justify dark:prose-invert lg:prose-xl lg:p-[1.5rem]">
                        {p.children}
                    </article>
                </div>
            </div>
        </main>
    );
};

export default ProjectContent;
