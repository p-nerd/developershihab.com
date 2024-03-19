import hljs from "highlight.js";

import { markedHighlight } from "marked-highlight";

import { Marked } from "marked";

const marked = new Marked(
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    }),
);

const Markdown = (p: { content: string }) => {
    return (
        <div
            className="prose prose-slate max-w-none dark:prose-invert prose-pre:bg-[#0d1116]"
            dangerouslySetInnerHTML={{
                __html: marked.parse(p.content),
            }}
        ></div>
    );
};

export default Markdown;
