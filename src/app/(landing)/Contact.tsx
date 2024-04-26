"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { person } from "@/site.config";

import toast from "@/lib/toast";
import sendContactEmail from "@/actions/sendContactEmail";
import useSectionInView from "@/hooks/useSectionInView";

import Anchor from "@/components/Anchor";
import SubmitBtn from "@/components/SubmitBtn";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
    const { ref } = useSectionInView("Contact");

    const fromRef = useRef<HTMLFormElement | null>(null);

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="-mt-6 text-gray-700 dark:text-white/80">
                Please contact me directly at{" "}
                <Anchor
                    ariaLabel="contact direct email"
                    className="underline underline-offset-2"
                    href={`mailto:${person.email}`}
                >
                    {person.email}
                </Anchor>{" "}
                or through this form.
            </p>

            <form
                ref={fromRef}
                className="mt-10 flex flex-col dark:text-black"
                action={async formData => {
                    const { error } = await sendContactEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    fromRef.current?.reset();
                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="borderBlack h-14 rounded-lg px-4 transition-all placeholder:text-gray-400 dark:bg-gray-800 dark:bg-opacity-80  dark:text-white dark:outline-none dark:focus:bg-opacity-100"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="borderBlack my-3 h-52 rounded-lg p-4 transition-all placeholder:text-gray-400 dark:bg-gray-800 dark:bg-opacity-80 dark:text-white dark:outline-none dark:focus:bg-opacity-100"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
};

export default Contact;
