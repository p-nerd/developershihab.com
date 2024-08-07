import { A, H2, Section } from "~/components/ui2/section";
import { person } from "~/lib/config";
import { FaSolidPaperPlane } from "solid-icons/fa";
import { createEffect, Show } from "solid-js";
import { useSubmission } from "@solidjs/router";
import sendContactEmail from "~/actions/sendContactEmail";

const Contact = () => {
    const contactEmail = useSubmission(sendContactEmail);

    createEffect(() => {
        console.log(contactEmail.result);
    });

    return (
        <Section id="contact" class="mb-20 w-[min(100%,38rem)] text-center sm:mb-28">
            <H2>Contact me</H2>
            <p class="-mt-6 text-gray-700 dark:text-white/80">
                Please contact me directly at <A href={`mailto:${person.email}`}>{person.email}</A>
                or through this form.
            </p>
            <form action={sendContactEmail} class="mt-10 flex flex-col dark:text-black">
                <input
                    class="borderBlack h-14 rounded-lg px-4 transition-all placeholder:text-gray-400 dark:bg-gray-800 dark:bg-opacity-80 dark:text-white dark:outline-none dark:focus:bg-opacity-100"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    class="borderBlack my-3 h-52 rounded-lg p-4 transition-all placeholder:text-gray-400 dark:bg-gray-800 dark:bg-opacity-80 dark:text-white dark:outline-none dark:focus:bg-opacity-100"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <button
                    aria-label="submit"
                    type="submit"
                    class="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
                    disabled={contactEmail.pending}
                >
                    <Show
                        when={!contactEmail.pending}
                        fallback={
                            <div class="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        }
                    >
                        Submit{" "}
                        <FaSolidPaperPlane class="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
                    </Show>
                </button>
            </form>
        </Section>
    );
};

export default Contact;
