import type { TPoem } from "@/lib/types";
import type { Metadata } from "next";

import { person } from "@/site.config";
import { get_poems } from "@/lib/content";

import Markdown from "@/components/Markdown";
import BreadCrumb from "@/components/BreadCrumb";

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
        <div className="mx-auto w-[325px] rounded-2xl bg-slate-200/50 px-5 py-10 text-center dark:bg-slate-800/50 sm:w-[500px] ">
            <h2 className="mb-5 text-2xl">{p.poem.name}</h2>
            <Markdown content={p.poem.body} />
        </div>
    );
};

const Poems = () => {
    const poems = get_poems();
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 lg:p-10">
            <BreadCrumb links={topsLinks} />
            {poems.map((poem, index) => (
                <Poem key={index} poem={poem} />
            ))}
        </div>
    );
};

export { metadata };
export default Poems;
