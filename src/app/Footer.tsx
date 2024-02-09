import person from "@/conf/person";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; {year} {person.name}. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">Built with:</span> Next.js 13, React, TypeScript,
                Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
            </p>
            <p className="text-xs">
                <span className="font-semibold">Design Inspired by:</span>{" "}
                <a href="https://youtu.be/sUKptmUVIBM" className="underline" target="_blank">
                    ByteGrad
                </a>
            </p>
        </footer>
    );
};

export default Footer;
