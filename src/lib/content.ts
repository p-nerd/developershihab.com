import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const separate_md = (data: string) => {
    const { data: frontmatter, content } = matter(data);
    return {
        frontmatter,
        content,
    };
};

export const render_markdown = (md: string) => {
    return marked.parse(md);
};

const blogs_content_path = path.join(process.cwd(), "content", "blogs");

export type TBlog = {
    slug: string;
    title: string;
    desc: string;
    date: string;
    excerpt: string;
    img: string;
    body: string;
};

export const get_blog = (slug: string) => {
    const markdownWithMeta = fs.readFileSync(path.join(blogs_content_path, slug + ".md"), "utf-8");
    const { frontmatter, content } = separate_md(markdownWithMeta);
    return {
        slug: slug as string,
        title: frontmatter.title as string,
        desc: frontmatter.desc as string,
        date: frontmatter.date as string,
        excerpt: frontmatter.excerpt as string,
        img: frontmatter.img as string,
        body: content as string,
    };
};

export const get_blogs = (): TBlog[] => {
    const files = fs.readdirSync(blogs_content_path);
    return files.map(filename => get_blog(filename.replace(".md", "")));
};
