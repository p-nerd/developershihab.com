import type { TPoem, TProject } from "./types";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import env from "./env";

const content_path = path.join(process.cwd(), "content");
const poems_content_path = path.join(content_path, "poems");
const projects_content_path = path.join(content_path, "projects");

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
