import type { Metadata } from "next";
import type { TPoem } from "@/lib/types";

import { get_poems } from "@/lib/content";

import person from "@/conf/person";

import BreadCrumb from "@/components/BreadCrumb";
import Markdown from "@/components/Markdown";

const topsLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Poems",
        href: "/poems",
    },
];

const metadata: Metadata = {
    title: `Poems by ${person.name}`,
};

const Poem = (p: { poem: TPoem }) => {
    return (
        <div className="mx-auto rounded-2xl bg-slate-200/50 px-5 py-10 text-center dark:bg-slate-800/50 sm:w-[500px] ">
            <h2 className="mb-5 text-2xl">{p.poem.name}</h2>
            <Markdown content={p.poem.body} />
        </div>
    );
};

const Poems = () => {
    const poems = get_poems();
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 md:p-10">
            <BreadCrumb links={topsLinks} />
            {poems.map((poem, index) => (
                <Poem key={index} poem={poem} />
            ))}
        </div>
    );
};

export { metadata };
export default Poems;
