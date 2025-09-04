import { forwardRef } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

const Projects = forwardRef((_props, ref) => {
    return (
        <section ref={ref} className="scroll-offset bg">
            <article className="text-style">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                    >
                        <h3 className="h3-title">My Projects</h3>
                    </motion.div>
                    <div className="grid grid-flow-row grid-cols-4 gap-8 mt-4">
                        <div className='col-span-3 col-start-1'>
                            <ProjectCard
                                projectimg='https://picsum.photos/200/300'
                                title='Google Clone'
                                description='A clone of the Google homepage built using HTML and CSS.'
                                skill1='Html'
                                skill2='CSS'
                                github=''
                                livedemo=''
                            />
                        </div>
                        <div className='col-span-3 col-start-2'>
                            <ProjectCard
                                projectimg='https://picsum.photos/200/500'
                                title='Instagram Clone'
                                description='A replica of the instagram homepage using Bootstrap and React'
                                skill1='Bootstrap'
                                skill2='React'
                                github=''
                                livedemo=''
                                reverse
                            />
                        </div>
                        <div className='col-span-3 col-start-1'>
                            <ProjectCard
                                projectimg='https://picsum.photos/200/400'
                                title='Calculator'
                                description='A simple calculator application built with JavaScript.'
                                skill1='Html'
                                skill2='CSS'
                                skill3='JavaScript'
                                github=''
                                livedemo=''
                            />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
});

export default Projects;
