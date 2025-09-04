import { forwardRef } from "react";
import SkillBar from "./Skillbar";
import { motion } from "framer-motion";

const About = forwardRef((_props, ref) => {
    return (
        <section ref={ref} className="scroll-offset bg">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <article className="text-style">
                    <div>
                        <h3 className="h3-title">About Me</h3>
                        <p className="mb-6">
                            I’m a 4th-year Computer Engineering student with a passion for web and game development.
                            I first got into algorithms by customizing Minecraft plugins, and later Unity caught my
                            interest, so I developed a few small games.
                        </p>
                        <p className="mb-6">
                            Now, I focus on creating interactive and responsive web applications with clean design
                            and smooth user experience.
                        </p>
                        <p className="mb-10">
                            As a hobby, I practice fitness, and I credit the discipline I’ve learned from it to my personal
                            growth and approach to every project.
                        </p>
                    </div>
                </article>
            </motion.div>

            <article className="text-neutral-800 dark:text-neutral-200 font-medium max-w-[700px] w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <div className="flex flex-col md:flex-row md:justify-between gap-12">
                        <ul className="skill-list">
                            <h4 className="h4-title items-center md:items-start">Frontend</h4>
                            <SkillBar skill="HTML" level={95}
                                description="I can confidently build the basic structure of web pages. I always try to write clean and semantic code." />
                            <SkillBar skill="CSS" level={85}
                                description="I can create responsive layouts using Flexbox and Grid. I pay attention to design details and visual consistency." />
                            <SkillBar skill="JavaScript" level={80}
                                description="I can add dynamic functionality, manipulate the DOM, and implement logical operations. I’ve built small projects and functional features with it." />
                            <SkillBar skill="Typescript" level={50}
                                description="I have intermediate experience. I use it mainly for type safety and reducing errors, and I’m gradually replacing JS with TS in my projects." />
                        </ul>
                        <ul className="skill-list">
                            <h4 className="h4-title items-center md:items-start">Frameworks</h4>
                            <SkillBar skill="Bootstrap" level={85}
                                description="I can quickly prototype and build modern UI layouts. I’m experienced in creating responsive websites with it." />
                            <SkillBar skill="Tailwind" level={80}
                                description="I use it actively to speed up styling with its utility-first approach. I can create clean and modern interfaces." />
                            <SkillBar skill="React" level={80}
                                description="I’m comfortable with the component-based mindset. I can manage state and props to build interactive applications. I also integrate APIs to fetch and display dynamic data. I’ve used it in both small projects and my portfolio site." />
                        </ul>
                        <ul className="skill-list">
                            <h4 className="h4-title items-center md:items-start">Other</h4>
                            <SkillBar skill="Git" level={70}
                                description="I’m confident with version control basics such as commit, push, pull, and branch management. I use GitHub to keep my projects organized." />
                            <SkillBar skill="C#" level={50}
                                description="I’ve used it mainly in Unity projects. I can write simple scripts and implement basic game logic." />
                            <SkillBar skill="Unity" level={60}
                                description="I’ve built small 2D/3D games. I’m familiar with scene management, setting up game mechanics, and building the core logic of a game." />
                        </ul>
                    </div>
                </motion.div>
            </article>
        </section>
    )

});

export default About;
