import React from "react";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { AiOutlineArrowRight } from "react-icons/ai";
import profileImage from './images/profile2.jpg';
import { Link } from 'react-scroll';
import { Reveal } from './Reveal';

const Home: React.FC = () => {
    return (
        <div className="Home py-10 bg-slate-200">
            <div className="flex flex-col justify-center text-center items-center">
                <Reveal>
                    <h1 className="text-4xl font-bold mt-10 underline">Lewin Bobda</h1>
                </Reveal>
                <Reveal>
                    <p className="text-2xl pt-2">Full Stack Web Developer</p>
                </Reveal>
                <Reveal>
                    <p className="text-lg mt-5 border p-5 bg-gray-800 text-white">Freelancer offering services in front end develompent, <br/>
                        back end development,
                        web design, and web automation
                    </p>
                </Reveal>
                <Link to='Portfolio' smooth smooth-duration={500}>
                    <Reveal>
                        <button className="group flex flex-row items-center mx-auto px-3 bg-gray-800 text-white mt-5 p-2">
                            Portfolio <span className="pl-2 group-hover:rotate-90 duration-300">
                                <AiOutlineArrowRight />
                            </span>
                        </button>
                    </Reveal>
                </Link>    
                <Reveal><button><img className="mt-10 mb-5 w-80 h-80 rounded-full" src={profileImage} alt="profile" /></button></Reveal>
                <div className="flex justify-center space-x-10 pr-5 mb-5">
                    <Reveal>
                        <a href="https://www.linkedin.com/in/lewin-bobda-08ba2325a/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin className="text-8xl text-blue-500 hover:text-blue-700 cursor-pointer" />
                        </a>
                    </Reveal>
                    <Reveal>
                        <a href="https://github.com/Lewin-B" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="text-8xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                        </a>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default Home;