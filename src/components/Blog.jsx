import { forwardRef } from "react";
import { motion } from "framer-motion";

import ContactLinks from "./ContactLinks";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Blog = forwardRef((_props, ref) => {
    return (
        <section ref={ref} className="scroll-offset bg">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <article className="text-style md:min-w-[700px]">
                    <div>
                        <h3 className="h3-title">Contact Me</h3>
                        <h4 className="h4-title">Have a Project in Mind?</h4>
                    </div>
                    <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 mt-12">
                            <ContactLinks icon={IoMdMail} title="Mail" description="akinarslan.dev@gmail.com" />
                            <ContactLinks icon={FaLinkedin} title="LinkedIn" link="https://www.linkedin.com/in/akinarslan-dev" description="akinarslan-dev" />
                            <ContactLinks icon={FaLocationDot} title="Location" description="Ankara / Turkey" />
                            <ContactLinks icon={FaGithub} title="Git-Hub" link="https://github.com/Akinarslann" description="Akinarslann" />
                        </ul>
                    </div>
                </article>
            </motion.div>
        </section>
    )
});

export default Blog;
