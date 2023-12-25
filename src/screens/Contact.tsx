import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";

const Contact = () => {
    return (
        <div class="flex flex-col gap-20">
            <main class="wrapper flex flex-col">
                <Hero
                    title="Contact With ME"
                    tagline="Use the form below to reach out or find me on social media. I'll get back to you promptly!"
                >
                    <></>
                </Hero>
                <h3>Under construction</h3>
            </main>

            <ContactCTA />
        </div>
    );
};

export default Contact;
