import A from "@/components/A";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import type { TChildren } from "@/helpers/types";

const Section = (p: { heading: string; children: TChildren }) => {
    return (
        <section class="flex flex-col gap-2 text-xx-gray-200 lg:flex-row lg:text-[1.25rem]">
            <h2 class="text-[1.625rem] text-xx-gray-0 lg:w-[20%]">
                {p.heading}
            </h2>
            <div class="lg:w-[80%]">{p.children}</div>
        </section>
    );
};

const Background = () => (
    <Section heading="Background">
        <>
            <p>
                Lorem ipsum dolor sit amet,{" "}
                <A href="https://astro.build/">Astro</A> makes people happy. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin nibh nisl condimentum id venenatis a condimentum vitae.
                Dapibus ultrices in iaculis nunc. Arcu odio ut sem nulla
                pharetra diam sit amet. Diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare.
            </p>
            <p>
                Arcu dui vivamus arcu felis bibendum ut tristique et egestas.
                Eget gravida cum sociis natoque penatibus. Cras fermentum odio
                eu feugiat pretium nibh. Proin nibh nisl condimentum id
                venenatis. Porta nibh venenatis cras sed felis eget velit. Id
                diam vel quam elementum pulvinar etiam non.
            </p>
            <p>
                Ultrices tincidunt arcu non sodales neque sodales ut. Sed enim
                ut sem viverra aliquet eget sit amet. Lacus luctus accumsan
                tortor posuere ac ut consequat semper viverra. Viverra accumsan
                in nisl nisi scelerisque eu ultrices. In massa tempor nec
                feugiat nisl pretium fusce.
            </p>
        </>
    </Section>
);

const Education = () => (
    <Section heading="Education">
        <p>Corporis voluptates tenetur laudantium.</p>
    </Section>
);

const Skills = () => (
    <Section heading="Skills">
        <p>officia unde omnis</p>
    </Section>
);

const About = () => {
    return (
        <div class="flex flex-col gap-20">
            <main class="wrapper about flex flex-col gap-14">
                <Hero
                    title="About"
                    tagline="Thanks for stopping by. Read below to learn more about myself and my background."
                />
                <Background />
                <Education />
                <Skills />
            </main>
            <ContactCTA />
        </div>
    );
};

export default About;
