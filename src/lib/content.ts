import type { TBlog, TPoem, TProject } from "./types";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import env from "./env";

const content_path = path.join(process.cwd(), "content");
const blogs_content_path = path.join(content_path, "blogs");
const poems_content_path = path.join(content_path, "poems");
const projects_content_path = path.join(content_path, "projects");

export const get_featured_blogs = () => {
    return get_blogs().slice(0, 5);
};

export const get_blogs = (): TBlog[] => {
    const files = fs.readdirSync(blogs_content_path);
    const blogs = files.map(filename => get_blog(filename.replace(".md", "")));
    const filtered_blogs = blogs.filter(blog => is_not_darfted_content(blog.draft));
    const priority_sorted_blogs = filtered_blogs
        .filter(x => !!x.priority)
        .sort((a, b) => (b.priority || 0) - (a.priority || 0));
    const not_priority_sorted_blogs = filtered_blogs
        .filter(x => !x.priority)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return [...priority_sorted_blogs, ...not_priority_sorted_blogs];
};

export const get_blog = (slug: string): TBlog => {
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

export const get_poems = (): TPoem[] => {
    const files = fs.readdirSync(poems_content_path);
    const poems = files.map(filename => get_poem(filename.replace(".md", "")));
    return poems
        .filter(poem => is_not_darfted_content(poem.draft))
        .sort((a, b) => (b.priority || 0) - (a.priority || 0));
};

export const get_poem = (slug: string): TPoem => {
    const markdownWithMeta = fs.readFileSync(path.join(poems_content_path, slug + ".md"), "utf-8");
    const { frontmatter, content } = separate_md(markdownWithMeta);
    return {
        name: frontmatter.name as string,
        draft: Boolean(frontmatter.draft),
        priority: Number(frontmatter.priority),
        body: content as string,
    };
};

export const get_projects = (): TProject[] => {
    return _sort_projects(_get_projects());
};

export const get_featured_projects = (): TProject[] => {
    return _sort_projects(_get_projects().filter(x => !!x.featured));
};

export const get_project = (slug: string): TProject => {
    const markdownWithMeta = fs.readFileSync(
        path.join(projects_content_path, slug + ".md"),
        "utf-8",
    );
    const { frontmatter, content } = separate_md(markdownWithMeta);
    return {
        slug,
        title: frontmatter.title as string,
        description: frontmatter.description as string,
        tags: frontmatter.tags as string[],
        imageUrl: frontmatter.imageUrl as string,
        links: frontmatter.links,
        draft: Boolean(frontmatter.draft),
        featured: Boolean(frontmatter.featured),
        priority: Number(frontmatter.priority),
        body: content as string,
    };
};

const _get_projects = (): TProject[] => {
    const files = fs.readdirSync(projects_content_path);
    const projects = files.map(filename => get_project(filename.replace(".md", "")));
    return projects.filter(project => is_not_darfted_content(project.draft));
};

const _sort_projects = (projects: TProject[]): TProject[] => {
    return projects.sort((a, b) => (b.priority || 0) - (a.priority || 0));
};

const separate_md = (data: string) => {
    const { data: frontmatter, content } = matter(data);
    return {
        frontmatter,
        content,
    };
};

const is_not_darfted_content = (draft?: boolean) => {
    if (env.SHOW_DRAFT_CONTENT) {
        return true;
    }
    return !draft;
};
