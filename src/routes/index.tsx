import { Divider } from "~/components/ui2/section";

import About from "~/screens/index/About";
import Header from "~/screens/index/Header";
import Hero from "~/screens/index/Hero";

const Index = () => {
    return (
        <div class="pt-28 sm:pt-36">
            <div class="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
            <div class="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] lg:left-[-33rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            <Header />
            <main class="flex flex-col items-center px-4">
                <Hero />
                <Divider />
                <About />
            </main>
        </div>
    );
};

export default Index;
