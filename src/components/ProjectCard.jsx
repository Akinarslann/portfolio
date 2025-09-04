import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ projectimg, title, description, skill1, skill2, skill3, github, livedemo, reverse }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <article className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} gap-4 rounded-md shadow-md dark:bg-neutral-800 dark:shadow-neutral-700/50 p-4`}>
                <img className='rounded-l-sm h-50 w-70' src={projectimg} />
                <div className='flex flex-col justify-between items-center'>
                    <div className=" flex items-center flex-col">
                        <h3 className='h4-title'>{title}</h3>
                        <p className='mt-3'>{description}</p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            {skill1 && <p className="bg-neutral-200 dark:bg-neutral-500 rounded-sm text-black dark:text-neutral-300 font-normal px-2">{skill1}</p>}
                            {skill2 && <p className="bg-neutral-200 dark:bg-neutral-500 rounded-sm text-black dark:text-neutral-300 font-normal px-2">{skill2}</p>}
                            {skill3 && <p className="bg-neutral-200 dark:bg-neutral-500 rounded-sm text-black dark:text-neutral-300 font-normal px-2">{skill3}</p>}
                        </div>
                        <div className='flex flex-row gap-4 items-center mt-3'>
                            <a href={github} className="text-black dark:text-gray-500 scale-200"><FaGithub /></a>
                            <a href={livedemo} className="bg-gray-500 hover:bg-black dark:hover:bg-gray-300 dark:text-black text-white rounded-sm w-24 h-10 border flex justify-center  items-center">Live Demo</a>
                        </div>
                    </div>
                </div>
            </article>
        </motion.div>
    )
}
