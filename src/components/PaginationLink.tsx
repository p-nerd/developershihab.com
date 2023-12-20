import { mergeProps } from "solid-js";

const PaginationLink = (props: { link?: string; text?: string }) => {
    const p = mergeProps({ link: "/", text: "More blogs" }, props);
    return (
        <a
            href={p.link}
            class="flex cursor-pointer flex-col items-center rounded-xl border bg-[#F9F9FB] py-2 text-[#7611a6] dark:border-[#283043] dark:bg-[#0F1119]"
        >
            <p>{p.text}</p>
        </a>
    );
};

export default PaginationLink;
