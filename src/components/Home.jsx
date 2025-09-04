import { forwardRef } from "react";
import { motion } from "framer-motion";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";


const Home = forwardRef((_props, ref) => {
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
                        <h1 className="h1-title">Hi, I'm Akın</h1>
                        <h3 className="h3-title">Front-End React Developer | Unity Game Developer</h3>
                        <p>I create modern, responsive, and user-friendly web applications with React & Tailwind CSS,
                            and I love building creative hyper-casual games with Unity.</p>
                    </div>
                    <div className="h4-title items-center md:items-start mt-16">
                        <p>Core Skills</p>
                        <div className="flex flex-row scale-175 gap-2 items-center">
                            <FaHtml5 style={{ color: '#E34F26' }} />
                            <FaCss3Alt style={{ color: '#663399' }} />
                            <FaJs style={{ color: '#F7DF1E' }} />
                            <FaReact style={{ color: '#61DAFB' }} />
                            <TbBrandCSharp style={{ color: '#A8B9CC' }} />
                            <FaUnity className="text-black dark:text-white" />
                        </div>
                    </div>
                </article>

            </motion.div>
        </section>
    )
});

export default Home;
