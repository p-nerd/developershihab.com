import { person } from "@/site.config";

import Anchor from "@/components/Anchor";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="my-10 flex flex-col gap-1 px-4 text-center text-gray-500">
            <small className="block text-xs">
                &copy; {year} {person.name}. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">Built with:</span> Next.js 14, React, TypeScript,
                Tailwind CSS, Framer Motion, React Email, Vercel hosting.
            </p>
            <p className="text-xs">
                <span className="font-semibold">Design Inspired by:</span>{" "}
                <Anchor
                    ariaLabel="External link of design inspiration"
                    href="https://youtu.be/sUKptmUVIBM"
                    className="underline"
                >
                    ByteGrad
                </Anchor>
            </p>
        </footer>
    );
};

export default Footer;
