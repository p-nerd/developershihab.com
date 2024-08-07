import { person, intro, technologies } from "~/lib/config";
import { FaBrandsDev, FaBrandsGithub, FaSolidDownload } from "solid-icons/fa";
import { BsArrowRight, BsFacebook, BsLinkedin, BsTwitter } from "solid-icons/bs";
import { type IconTypes } from "solid-icons";
import { A, B, I } from "~/components/ui2/section";

const SocialA = (p: { href: string; icon: IconTypes; ariaLabel: string }) => {
    return (
        <a
            class="borderBlack flex cursor-pointer items-center gap-1 rounded-full bg-white p-2 text-[1rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 lg:gap-2 lg:p-4 lg:text-[1.35rem]"
            href={p.href}
        >
            <p.icon class="text-gray-200 hover:text-gray-200" />
        </a>
    );
};

const Hero = () => {
    return (
        <section id="home" class="mb-28 max-w-[55rem] scroll-mt-[100rem] text-center sm:mb-0">
            <div class="flex flex-col items-center justify-center space-y-3">
                <div class="relative">
                    <div>
                        <img
                            src="/portrait.jpg"
                            alt="Shihab Mahamud"
                            width="192"
                            height="192"
                            class="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                        />
                    </div>
                    <span class="absolute bottom-0 right-0 text-4xl">👋</span>
                </div>
                <div class="text-[0.6rem] lg:text-[0.8rem]">
                    Programmer | Problem Solver | Full-stack Developer
                </div>
            </div>

            <h1 class="mb-8 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl lg:mb-10 lg:mt-6">
                <B>Hello, I'm Shihab.</B> I'm a <B class="font-bold">full-stack developer</B> with{" "}
                <B>3 years</B> of experience, and I enjoy building for <I>the web.</I> My focus is{" "}
                <A href={technologies.Laravel} target="_blank">
                    Laravel
                </A>{" "}
                &{" "}
                <A href={technologies.React} target="_blank">
                    React
                </A>
                .
            </h1>

            <div class="flex flex-col items-center justify-center gap-2 px-4 text-sm font-medium lg:text-lg">
                <div class="flex gap-1.5 sm:flex-row lg:gap-3">
                    <a
                        href="#contact"
                        class="group flex items-center gap-1 rounded-full bg-gray-900 px-4 py-2.5 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 lg:gap-2 lg:px-7 lg:py-3"
                    >
                        Contact me here{" "}
                        <BsArrowRight class="opacity-70 transition group-hover:translate-x-1" />
                    </a>

                    <a
                        class="borderBlack group flex cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2.5 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 lg:gap-2 lg:px-7 lg:py-3"
                        href={intro.resume}
                        download
                    >
                        Download CV{" "}
                        <FaSolidDownload class="opacity-60 transition group-hover:translate-y-1" />
                    </a>
                </div>
                <div class="flex items-center justify-center gap-1 lg:gap-2">
                    <SocialA ariaLabel="Facebook" href={person.facebook} icon={BsFacebook} />
                    <SocialA ariaLabel="Linkedin" href={person.linkedin} icon={BsLinkedin} />
                    <SocialA ariaLabel="Twitter" href={person.twitter} icon={BsTwitter} />
                    <SocialA ariaLabel="Github" href={person.github} icon={FaBrandsGithub} />
                    <SocialA ariaLabel="Dev.to" href={person.dev_to} icon={FaBrandsDev} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
