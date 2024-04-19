"use client"
import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {GiReactor} from "react-icons/gi";


const Navbar = () => {
    return (
        <nav className={"mb-20 flex items-center justify-between py-6"}>
            <div className={"flex flex-shrink-0 items-center"}>
                <GiReactor  className={"mx-2 w-10 h-10"}/>
            </div>
            <div className={"m-8 flex items-center justify-center gap-4 text-2xl"}>
                <FaLinkedin className={'hover:fill-cyan-300 cursor-pointer'} onClick={() => {
                    window.open('https://www.linkedin.com/in/javad-eslamian-170208199/', '_blank');
                }}/>
                <FaGithub className={'hover:fill-cyan-300 cursor-pointer'} onClick={() => {
                    window.open('https://github.com/JavadEsl77', "_blank")
                }}/>
                <FaInstagram className={'hover:fill-cyan-300 cursor-pointer'} onClick={() => {
                    window.open("https://www.instagram.com/javad_esl?igsh=MWxqb2Z2a3ppZ3E2cw==", "_blank")
                }}/>
            </div>
        </nav>
    );
};

export default Navbar;