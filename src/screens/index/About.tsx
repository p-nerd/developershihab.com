import { H2, A, B, I, Section } from "~/components/ui2/section";

const About = () => {
    return (
        <Section id="about" class="mb-40 max-w-[45rem] scroll-mt-28 text-center">
            <H2>About Me</H2>
            <p>
                After graduating from <B>high school</B>, I was introduced to programming through
                the internet. I began learning programming with the C language, using Tamim Shahriar
                Subeen's book "Computer Programming". Subsequently, I engaged in problem-solving on
                various Competitive Programming platforms using C/C++. Over a period of 1.5 years, I
                solved over{" "}
                <A href="https://github.com/p-nerd/online_judges" target="_blank">
                    1100+ problems
                </A>
                . During problem-solving, I also learned{" "}
                <A href="https://github.com/p-nerd/dsa_library" target="_blank">
                    Data Structure And Algorithms
                </A>
            </p>
            <p>
                My interest then shifted towards Web application development, prompting me to
                initially delve into backend development with Node.js, followed by frontend
                development with React. Over the past year, I have been engaged in contract-based
                work with a company called Finnext.co, where I have contributed to several notable
                projects. Currently, my focus lies on <B>Laravel</B> & <B>React</B> stacks. I
                believe it is the most productive way to build and maintain a dynamic full-stack web
                application. Also, sometime I work on WordPress plugin development. I am deeply
                passionate about continuously expanding my skill set and am actively seeking a{" "}
                <B>full-time position</B> as a software developer. Also I am currently a 4th year
                diploma student at Faridpur Polytechnic Institute studying Computer Science.
            </p>
            <p>
                <I>When I'm not coding</I>, I enjoy walking on street, watching movies, and chat
                with friends and family. I also enjoy <B>learning new things</B>. I am currently
                learning about <B>Business & Entrepreneurship</B>. Sometime I also write some{" "}
                <A href="/poems">bangla poems</A>.
            </p>
        </Section>
    );
};

export default About;
