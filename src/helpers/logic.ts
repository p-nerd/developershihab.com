import type { TBlog, TProject } from "@/content/config.ts";

import { getCollection } from "astro:content";
import { BLOGS, PROJECTS } from "@/content/config.ts";

const sort_blogs_publish_date = (blogs: TBlog[]): TBlog[] => {
    return blogs.sort(
        (a, b) => b.data.publish_date.valueOf() - a.data.publish_date.valueOf(),
    );
};

const filter_draft_blogs = (blogs: TBlog[]): TBlog[] => {
    return blogs.filter(blog => !blog.data.draft);
};

export const get_blogs = async (): Promise<TBlog[]> => {
    let blogs = await getCollection(BLOGS);
    blogs = filter_draft_blogs(blogs);
    blogs = sort_blogs_publish_date(blogs);
    return blogs;
};

const filter_draft_projects = (projects: TProject[]): TProject[] => {
    return projects.filter(project => !project.data.draft);
};

const sort_projects_with_rank = (projects: TProject[]): TProject[] => {
    return projects.sort((a, b) => a.data.rank - b.data.rank);
};

export const get_projects = async (): Promise<TProject[]> => {
    let projects = await getCollection(PROJECTS);
    projects = filter_draft_projects(projects);
    projects = sort_projects_with_rank(projects);
    return projects;
};

export const get_featured_projects = async () => {
    return (await get_projects()).slice(0, 4);
};
