import type { TSocialLink } from "@/helpers/types";

import { email, social_links } from "site.config";
import { For } from "solid-js";

import A from "@/components/A";
import Hero from "@/components/Hero";
import Default from "@/icons/Default";

const ContactSocialItem = (p: { socialLink: TSocialLink }) => {
    const Icon = p.socialLink.icon_x || Default;
    return (
        <div class="flex w-full items-center gap-1 lg:w-1/2">
            <div>
                <Icon class="w-20" />
            </div>
            <div class="flex flex-col justify-center gap-0">
                <h4 class="text-lg">{p.socialLink.label}</h4>
                <A class="text-lg" href={p.socialLink.href}>
                    {p.socialLink.label === "Email"
                        ? `${email}`
                        : p.socialLink.href}
                </A>
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <main class="wrapper flex flex-col items-center gap-10 pb-10 lg:gap-20 lg:pb-24">
            <Hero
                title="Contact With ME"
                tagline="Interested in working together? Reach out to me via email or find me on social media, and I'll get back to you!"
                class="max-w-[1024px] text-start lg:text-center"
            />
            <div class="flex w-full max-w-[800px] flex-wrap space-y-3">
                <For each={social_links}>
                    {social_link => (
                        <ContactSocialItem socialLink={social_link} />
                    )}
                </For>
            </div>
        </main>
    );
};

export default Contact;
