'use client'
import React from 'react';
import {motion} from "framer-motion"
import {PROJECTS} from "@/app/constants";

const Projects = () => {
    return (
        <div className={'border-b border-neutral-900 pb-4'}>
            <motion.h1
                initial={{opacity:0 , y:-50}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1}}
                className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
                {PROJECTS.map((project, index) => {
                    return <div key={index} className={'mb-8 flex flex-wrap lg:justify-center'}>
                        <motion.div
                            initial={{opacity:0 , x:-100}}
                            whileInView={{opacity:1,x:0}}
                            transition={{duration:1}}
                            className="w-full md:w-1/2 lg:w-1/4">
                            <img  style={{width:"95%" , height:"150px" , objectFit:"cover"}} src={project.image.src} alt={project.title} width={150} height={150}
                                 className={'mb-6 rounded'}/>
                        </motion.div>
                        <motion.div
                            initial={{opacity:0 , x:100}}
                            whileInView={{opacity:1,x:0}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech,index)=>{
                                return <span key={index} className={"mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"}>{tech}</span>
                            })}
                        </motion.div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Projects;