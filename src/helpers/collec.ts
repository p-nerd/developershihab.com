import { BLOGS, PROJECTS, type TBlog, type TProject } from "@/content/config";
import { getCollection } from "astro:content";

export const get_blogs = async (): Promise<TBlog[]> => {
    return (await getCollection(BLOGS)).sort(
        (a, b) => b.data.publish_date.valueOf() - a.data.publish_date.valueOf(),
    );
};

export const get_projects = async (): Promise<TProject[]> => {
    return getCollection(PROJECTS);
};
