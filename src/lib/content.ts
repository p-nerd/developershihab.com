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
    draft?: boolean;
    priority?: number;
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
        draft: Boolean(frontmatter.draft),
        priority: Number(frontmatter.priority),
        body: content as string,
    };
};

export const get_blogs = (): TBlog[] => {
    const files = fs.readdirSync(blogs_content_path);
    const blogs = files.map(filename => get_blog(filename.replace(".md", "")));
    const filtered_blogs = blogs.filter(blog => (blog.draft ? !blog.draft : true));
    const priority_sorted_blogs = filtered_blogs
        .filter(x => !!x.priority)
        .sort((a, b) => b.priority - a.priority);
    const not_priority_sorted_blogs = filtered_blogs
        .filter(x => !x.priority)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return [...priority_sorted_blogs, ...not_priority_sorted_blogs];
};
