import React from 'react';
import Durdle from './images/Durdle.png';
import Shop from './images/Shop.png';
import Car from './images/Car.png';
import ML from './images/ML.jpeg';
import Law from './images/secondfinal.gif';
import blurr from './images/image (1).jpg';
import { Reveal } from './Reveal';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      img: Durdle,
      name: 'Durdle',
      description: 'Movie trivia game using the TMDB API',
      gitUrl: 'https://github.com/Lewin-B/Durdle.git',
      Url: 'https://durdlegame.com',
      status: true,
    },
    {
      id: 2,
      img: Shop,
      name: 'Sample-Shop',
      description: 'A sample shop that displays products and stores orders in a MySQL database hosted on AWS RDS',
      gitUrl: 'https://github.com/Lewin-B/Shop-Template.git',
      Url: '',
      status: false,
    },
    {
      id: 3,
      img: Car,
      name: 'Car-Price Scraper',
      description: 'A python script that scrapes the make model and price of select cars off of Carmax and Driveway and then displays the information on a csv file',
      gitUrl: 'https://github.com/Lewin-B/Car_price_bot.git',
      Url: '',
      status: false,
    },
    {
      id: 4,
      img: ML,
      name: 'Image-Classification',
      gitUrl: 'https://github.com/Lewin-B/Image-Classification.git',
      Url: '',
      status: false,
    },
    {
      id: 5,
      img: Law,
      name: 'Lawgic',
      gitUrl: 'https://github.com/Lewin-B/KnightHacks-2023',
      Url: '',
      status: false,
    },
    {
      id: 6,
      img: blurr,
      name: 'blurrsmith.ai',
      gitUrl: 'https://github.com/Lewin-B/Shellhacks-2023',
      Url: 'https://6507104a5d971a4275e265e1--strong-kringle-b099de.netlify.app/',
      status: true,
    }
  ];

  return (
    <div className='Portfolio py-20 bg-slate-200'>
      <Reveal>
        <h1 className="text-4xl text-center font-bold pb-5 underline">Portfolio</h1>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {projects.map(({name, id, img, status, gitUrl, Url }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center py-10 border bg-gray-800 border-gray-300 rounded-md hover:shadow-lg"
          >
            <h1 className="text-xl underline text-white font-bold pb-3"> {name} </h1>
            <Reveal>
              <div className="mb-4">
                <img className="h-50 w-50 px-10 rounded-md" src={img} alt="project" />
              </div>
            </Reveal>
            <div className="flex items-center justify-center">
              {!status ? (
                <Reveal>
                  <a href={gitUrl}>
                      <button className="px-6 m-4 duration-200 hover:scale-105 font-roboto text-white">
                        <span className='border p-2 rounded-md'>Details</span>
                      </button>
                  </a>
                </Reveal>
              ) : (
                <div className="flex sm:flex-row flex-col justify-center">
                    <Reveal>
                      <a href={gitUrl}>
                          <button className="px-6 m-4 duration-200 hover:scale-105 font-roboto text-white">
                            <span className='border p-2 rounded-md'>Details</span>
                          </button>
                      </a>
                    </Reveal>
                    <Reveal>
                      <a href={Url}>
                          <button className="px-6 m-4 duration-200 hover:scale-105 font-roboto text-white">
                          <span className='border p-2 rounded-md'>Demo</span>
                          </button>
                      </a>
                    </Reveal>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;