import type { TChildren } from "@/helpers/types";
import { testimonials } from "site.config.ts";
import Iframe from "@/components/Iframe";

export const TestimonialHead = () => {
    return (
        <header class="flex max-w-[50ch] flex-col gap-2 justify-self-center text-center text-[1.125rem] text-xx-gray-300 lg:gap-4 lg:text-[1.25rem]">
            <h3 class="text-[2.125rem] lg:text-[3.5rem]">Testimonials</h3>
            <p>
                I have been a part of several successful projects. Here are
                testimonials and their stories from clients.
            </p>
        </header>
    );
};

const SideButton = (p: { children: TChildren }) => {
    return (
        <div class="w-max cursor-pointer text-xl lg:text-[100px]">
            {p.children}
        </div>
    );
};

const Testimonials = () => {
    const index = 0;
    const testimonial = testimonials[index];
    return (
        <div class="flex h-full w-full flex-col gap-5">
            <div class="w-full px-6 text-center text-base lg:text-xl">
                <h4 class="text-lg lg:text-2xl">{testimonial.title}</h4>
                <p>{testimonial.subtitle}</p>
            </div>
            <div class="flex h-full w-full flex-row items-center gap-3">
                <SideButton>&lt;</SideButton>
                <Iframe title={testimonial.title} src={testimonial.src} />
                <SideButton>&gt;</SideButton>
            </div>
        </div>
    );
};

export default Testimonials;
