import "./footer.css";
import { socialLinks } from "../../../../site.config.ts";
import { getCurrentYear } from "../../../helpers/date.ts";

const currentYear = getCurrentYear();

const Footer = () => {
    return (
        <footer className="flex flex-col gap-12 mt-auto py-12 px-8 text-center lg:flex-row lg:justify-between lg:py-[2.5rem] lg:px-[5rem]">
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:flex-wrap">
                <p>
                    Designed inspired from
                    <a href="https://astro.build/themes/details/portfolio/">
                        Portfolio
                    </a>
                    Template by
                    <a href="https://astro.build/">Astro</a>
                </p>
                <p>&copy; {currentYear} Shihab Mahamud</p>
            </div>
            <p className="socials flex flex-wrap justify-center lg:justify-end gap-4">
                {socialLinks.map((socialLink, index: number) => (
                    <a key={index} href={socialLink.href}>
                        {socialLink.label}
                    </a>
                ))}
            </p>
        </footer>
    );
};

export default Footer;
