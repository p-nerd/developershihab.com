import type { JSX } from "solid-js";

const ProjectPill = (p: { children: JSX.Element }) => {
    return (
        <div class="flex gap-2 whitespace-nowrap rounded-full border border-solid border-purple-700 bg-sx-gray-999 px-4 py-2 text-lg font-bold leading-[1.35] text-purple-700">
            {p.children}
        </div>
    );
};

export default ProjectPill;
