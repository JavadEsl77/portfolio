'use client'
import React from 'react';
import {motion} from "framer-motion"
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { SiPwa } from "react-icons/si";
import { SiPusher } from "react-icons/si";
import { SiReactquery } from "react-icons/si";


const iconVariants = (duration: any) => ({
    initial: {y: -5},
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    },

})

const Technologies = () => {
    return (
        <div className={'border-b border-neutral-800 pb-24'}>
            <motion.h2
                initial={{opacity:0 , y:-100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1}}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1}}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    variants={iconVariants(4.5)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className={'text-7xl text-yellow-300'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoTypescript className={'text-7xl text-blue-400'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className={'text-7xl text-cyan-400'}/>
                </motion.div>


                <motion.div
                    variants={iconVariants(1.5)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPwa className={'text-7xl text-purple-700'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(4.5)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className={'text-7xl'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiRedux className={'text-7xl text-purple-500'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(4.5)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMui className={'text-7xl text-blue-600'}/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className={'text-7xl text-sky-400'}/>
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCypress className={'text-7xl'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiReactquery className={'text-7xl text-red-500'}/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial={"initial"}
                    animate={"animate"}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPusher className={'text-7xl text-green-600'}/>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Technologies;