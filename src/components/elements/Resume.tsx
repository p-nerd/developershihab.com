import experiences from "@/config/experiences";

import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import MapPinIcon from "../icons/MapPinIcon";

const Resume = () => {
    return (
        <div className="mx-auto max-w-4xl bg-white p-8 text-sm">
            <header className="mb-8">
                <h1 className="mb-2 text-center text-5xl font-bold text-gray-800">
                    <span className="font-normal text-gray-600">Shihab</span> Mahamud
                </h1>
                <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                    <a href="mailto:email@example.com" className="flex items-center gap-1">
                        <MailIcon className="h-4 w-4" />
                        shihab4t@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-1">
                        <LinkedinIcon className="h-4 w-4" />
                        linkedin.com/in/shihab-mahamud
                    </a>
                    <a href="https://github.com/johndoe" className="flex items-center gap-1">
                        <GithubIcon className="h-4 w-4" />
                        github.com/p-nerd
                    </a>
                    <span className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        Faridpur, Bangladesh
                    </span>
                </div>
            </header>

            <section className="mb-8">
                <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
                    SUMMARY
                </h2>
                <p className="leading-relaxed text-gray-700">
                    Results-driven Software Engineer with 5+ years of experience developing robust
                    web applications and microservices. Proven track record of delivering
                    high-quality code, optimizing application performance, and implementing best
                    practices in software development. Strong expertise in full-stack development
                    with a focus on scalable cloud solutions.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
                    EXPERIENCE
                </h2>

                {experiences.map((experience, index) => (
                    <div className="mb-6" key={index}>
                        <div className="mb-2 flex justify-between">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {experience.firm.name}
                            </h3>
                            <span className="text-gray-600">{experience.firm.location}</span>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <h4 className="text-lg text-gray-600">Senior Software Engineer</h4>
                            <span className="text-gray-600">Jan 2022 - Present</span>
                        </div>
                        <ul className="list-disc space-y-2 pl-6 text-gray-700">
                            <li>
                                Led a team of 5 engineers in developing and maintaining a
                                cloud-native e-commerce platform serving 100K+ daily users
                            </li>
                            <li>
                                Implemented microservices architecture using Node.js and Docker,
                                resulting in 40% improvement in system scalability
                            </li>
                            <li>
                                Optimized database queries and implemented caching strategies,
                                reducing response time by 60%
                            </li>
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projects Section */}
            <section className="mb-8">
                <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
                    PROJECTS
                </h2>

                <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800">
                            E-commerce Analytics Dashboard
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://demo-analytics.example.com"
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                            >
                                <span className="text-sm">Live Demo</span>
                            </a>
                            <a
                                href="https://github.com/johndoe/analytics-dashboard"
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                            >
                                <GithubIcon className="h-4 w-4" />
                                <span className="text-sm">Source</span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-3 text-xs">
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            React
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            D3.js
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            Redux
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            WebSocket
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            Node.js
                        </span>
                    </div>
                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            Built a real-time analytics dashboard using React and D3.js for
                            visualizing sales data
                        </li>
                        <li>
                            Implemented WebSocket integration for live updates and Redux for state
                            management
                        </li>
                        <li>
                            Reduced data processing time by 70% through optimization of backend
                            algorithms
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Open Source Contribution Management System
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://contrib-manager.example.com"
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                            >
                                <span className="text-sm">Live Demo</span>
                            </a>
                            <a
                                href="https://github.com/johndoe/contribution-manager"
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                            >
                                <GithubIcon className="h-4 w-4" />
                                <span className="text-sm">Source</span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-3 text-xs">
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            MongoDB
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            Express.js
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            React
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            Node.js
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            OAuth2.0
                        </span>
                        <span className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">
                            GitHub Actions
                        </span>
                    </div>
                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            Developed a full-stack application using MERN stack to track open source
                            contributions
                        </li>
                        <li>Implemented OAuth2.0 authentication and role-based access control</li>
                        <li>Created CI/CD pipeline using GitHub Actions, achieving 99.9% uptime</li>
                    </ul>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
                <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
                    SKILLS
                </h2>
                <div className="">
                    <div className="flex space-x-2">
                        <h3 className="mb-2 w-[80px] font-semibold text-gray-800">Languages: </h3>
                        <p className="text-gray-700">JavaScript (ES6+), Python, TypeScript, Java</p>
                    </div>
                    <div className="flex space-x-2">
                        <h3 className="mb-2 w-[80px] font-semibold text-gray-800">Frontend: </h3>
                        <p className="text-gray-700">React, Vue.js, HTML5, CSS3, Sass</p>
                    </div>
                    <div className="flex space-x-2">
                        <h3 className="mb-2 w-[80px] font-semibold text-gray-800">Backend: </h3>
                        <p className="text-gray-700">Node.js, Express, Django, Spring Boot</p>
                    </div>
                    <div className="flex space-x-2">
                        <h3 className="mb-2 w-[80px] font-semibold text-gray-800">Databases: </h3>
                        <p className="text-gray-700">PostgreSQL, MongoDB, Redis</p>
                    </div>
                    <div className="flex space-x-2">
                        <h3 className="mb-2 w-[80px] font-semibold text-gray-800">Tools: </h3>
                        <p className="text-gray-700">Jest, Pytest, JUnit, Selenium</p>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section>
                <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">
                    EDUCATION
                </h2>

                <div className="mb-6">
                    <div className="mb-2 flex justify-between">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Master of Science in Computer Science
                        </h3>
                        <span className="text-gray-600">2017 - 2019</span>
                    </div>
                    <h4 className="mb-2 text-lg text-gray-600">Stanford University</h4>
                    <ul className="list-disc space-y-1 pl-6 text-gray-700">
                        <li>GPA: 3.8/4.0</li>
                        <li>Specialization in Distributed Systems</li>
                        <li>Teaching Assistant for Advanced Algorithms course</li>
                    </ul>
                </div>

                <div>
                    <div className="mb-2 flex justify-between">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Bachelor of Science in Software Engineering
                        </h3>
                        <span className="text-gray-600">2013 - 2017</span>
                    </div>
                    <h4 className="mb-2 text-lg text-gray-600">
                        University of California, Berkeley
                    </h4>
                    <ul className="list-disc space-y-1 pl-6 text-gray-700">
                        <li>GPA: 3.9/4.0</li>
                        <li>Dean's List all semesters</li>
                        <li>President of Computing Society</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
