import "./app.css";

import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import { person } from "~/lib/config";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer class="my-10 flex flex-col gap-1 px-4 text-center text-gray-500">
            <small class="block text-xs">
                &copy; {year} {person.name}. All rights reserved.
            </small>
            <p class="text-xs">
                <span class="font-semibold">Built with:</span> SolidStart, SolidJS, TypeScript,
                Tailwind CSS
            </p>
            <p class="text-xs">
                <span class="font-semibold">Design Inspired by:</span>{" "}
                <A href="https://youtu.be/sUKptmUVIBM" class={"underline underline-offset-2"}>
                    ByteGrad
                </A>
            </p>
        </footer>
    );
};

const App = () => {
    return (
        <Router
            root={props => (
                <Suspense>
                    {props.children}
                    <Footer />
                </Suspense>
            )}
        >
            <FileRoutes />
        </Router>
    );
};

export default App;
