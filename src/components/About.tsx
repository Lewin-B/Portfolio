import React from 'react';
import Skills from './Skills';
import { Reveal } from './Reveal';

const AboutPage: React.FC = () => {
  return (
    <div className='About py-10 bg-slate-200'>
      <div className="container mx-auto px-10 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-full">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4 text-center underline">About Me</h1>
          </Reveal>
            <Reveal>
              <p className="text-lg mb-4 text-center mt-5 bg-gray-800 text-white p-5">
                I'm Lewin Bobda, a full stack web developer.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-lg mb-4 text-center bg-gray-800 text-white p-5">
                I'm a full time student at UCF and have been studying computer science for over 4 years.
                I am very well versed with both Front end and back end development. I derive most of my web development
                experience from using flask and its corresponding frameworks like jinja but I'm also skilled in react the combination
                of these allows me to build visually appealing front ends and dynamic back ends. As well as this I am also skilled in
                several web automation frameworks which allows me to create scripts that can carry out Unit Tests or scrape information
              </p>
            </Reveal>
            <Reveal>
              <h1 className="text-4xl font-bold text-center pt-5 underline">Skills</h1>
            </Reveal>
            <div><Skills /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;