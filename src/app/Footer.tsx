import Anchor from "@/components/Anchor";
import person from "@/conf/person";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="mb-10 mt-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; {year} {person.name}. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">Built with:</span> Next.js 14, React, TypeScript,
                Tailwind CSS, Framer Motion, React Email, Vercel hosting.
            </p>
            <p className="text-xs">
                <span className="font-semibold">Design Inspired by:</span>{" "}
                <Anchor href="https://youtu.be/sUKptmUVIBM" className="underline">
                    ByteGrad
                </Anchor>
            </p>
        </footer>
    );
};

export default Footer;
