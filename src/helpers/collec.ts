import type { TBlog, TProject } from "@/content/config";

import { BLOGS, PROJECTS } from "@/content/config";
import { getCollection } from "astro:content";

const sort_blogs_publish_date = (blogs: TBlog[]): TBlog[] => {
    return blogs.sort(
        (a, b) => b.data.publish_date.valueOf() - a.data.publish_date.valueOf(),
    );
};

const filter_darft_blogs = (blogs: TBlog[]): TBlog[] => {
    return blogs.filter(blog => !blog.data.draft);
};

export const get_blogs = async (): Promise<TBlog[]> => {
    let blogs = await getCollection(BLOGS);
    blogs = filter_darft_blogs(blogs);
    blogs = sort_blogs_publish_date(blogs);
    return blogs;
};

const filter_darft_projects = (projects: TProject[]): TProject[] => {
    return projects.filter(project => !project.data.draft);
};

export const get_projects = async (): Promise<TProject[]> => {
    let projects = await getCollection(PROJECTS);
    projects = filter_darft_projects(projects);
    return projects;
};
