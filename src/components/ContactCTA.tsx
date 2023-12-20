import { email } from "site.config.ts";
import PaperPlaneTilt from "@/icons/PaperPlaneTilt.tsx";
import CallToAction from "./CallToAction.tsx";

const ContactCTA = () => {
    return (
        <aside class="flex flex-col items-center gap-12 border-y border-solid border-[#e3e6ee] bg-sx-gray-999_40 px-6 py-20 shadow-sx-shadow-sm dark:border-[#283044] lg:flex-row lg:flex-wrap lg:justify-between lg:p-[7.5rem]">
            <h2 class="max-w-[15ch] text-center text-[1.625rem] lg:text-left lg:text-[2.625rem]">
                Interested in working together?
            </h2>
            <CallToAction href={`mailto:${email}`}>
                Send Me a Message
                <PaperPlaneTilt />
            </CallToAction>
        </aside>
    );
};

export default ContactCTA;
