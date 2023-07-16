import React from 'react';
import AWS from './images/AWS.png';
import CSS from './images/CSS.png';
import Flask from './images/Flask.png';
import HTML from './images/HTML.png';
import Selenium from './images/Selenium.png';
import Tailwind from './images/tailwindcss.png';
import Typescript from './images/typescript.png';
import Javascript from './images/javascript.png';
import Python from './images/Python.png';
import { Reveal } from './Reveal';

const Skills: React.FC = () => {
  const icons = [
    {
      id: 1,
      name: 'AWS',
      src: AWS
    },
    {
      id: 2,
      name: 'CSS',
      src: CSS
    },
    {
      id: 3,
      name: 'Flask',
      src: Flask
    },
    {
      id: 4,
      name: 'HTML',
      src: HTML
    },
    {
      id: 5,
      name: 'Selenium',
      src: Selenium
    },
    {
      id: 6,
      name: 'Tailwind',
      src: Tailwind
    },
    {
      id: 7,
      name: 'Typescript',
      src: Typescript
    },
    {
      id: 8,
      name: 'Javascript',
      src: Javascript
    },
    {
      id: 9,
      name: 'Python',
      src: Python
    }
  ]

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 pb-20'>
      {icons.map(({id, name, src}) => (
        <Reveal>
          <div key={id} className='flex flex-col items-center border bg-gray-800 text-white'>
            <img className='h-20 w-20' src={src} alt={name} />
            <p> {name} </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Skills;