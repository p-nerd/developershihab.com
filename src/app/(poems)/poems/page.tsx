import type { Metadata } from "next";

import BreadCrumb from "@/components/BreadCrumb";

import person from "@/conf/person";

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
    title: `Blogs written by ${person.name}`,
};

const Poem = () => {
    return (
        <div className="mx-auto rounded-2xl bg-slate-50/70 px-5 py-10 text-center dark:bg-slate-800/50 sm:w-[500px] ">
            <h2 className="mb-5 text-2xl">"তুমি"</h2>
            <div>
                <div>তোমার চোখের সাথে তুলনা আমি কিসের করি।</div>
                <div>তোমার চোখের মায়ায় আমি প্রেমে পড়ি।</div>
                <div>তোমার ওই মিস্টি হাসি এখনো আমার চোখে।</div>
                <div>তোমার চোখের পাপড়ি গুলা আমায় দেখে হাসে।</div>
                <div>তোমার নয়ন আমাকে কিছু বলে।</div>
                <div>তোমার রুপের সাক্ষি রেখে চলে।</div>
                <div>তোমার সৌন্দর্যের বর্ননার নাই শেষ।</div>
                <div>তোমার প্রেমে হতে চাই এক দরবেশ।</div>
            </div>
        </div>
    );
};

const Poems = () => {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 md:p-10">
            <BreadCrumb links={topsLinks} />
            <Poem />
        </div>
    );
};

export { metadata };
export default Poems;
