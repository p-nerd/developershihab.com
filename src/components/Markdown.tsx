import { marked } from "marked";

const render_markdown = (md: string) => {
    return marked.parse(md);
};

const Markdown = (p: { content: string }) => {
    return (
        <div
            className="prose prose-slate max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{
                __html: render_markdown(p.content),
            }}
        ></div>
    );
};

export default Markdown;
