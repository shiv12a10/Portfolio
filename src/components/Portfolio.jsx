import React from "react";
import pizza from "../assets/portfolio/pizza.png";
import ecommerce from '../assets/portfolio/ecommerce.png';
import gst from '../assets/portfolio/gst.png'
import saloon from '../assets/portfolio/saloon.png'
import digiwatch from '../assets/portfolio/digiwatch.png'
import JobZEE from '../assets/portfolio/JobZEE.png'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: JobZEE,
      link: 'https://drive.google.com/file/d/1rjrVKMTdjRj_p08SQZdNsLWzyCVYEKjc/view?usp=sharing',
    },
    {
      id: 2,
      src: pizza,
      link: 'https://pizza-shiv.netlify.app/',
    },
    {
      id: 3,
      src: ecommerce,
      link: 'https://shiv12a10.github.io/E-Commerce/',
    },
    {
      id: 4,
      src: gst,
      link: 'https://shiv12a10.github.io/Game-on-GST/',
    },
    {
      id: 5,
      src: saloon,
      link: 'https://shiv12a10.github.io/Saloon/',
    },
    {
      id: 6,
      src: digiwatch,
      link: 'https://shiv12a10.github.io/Digi-Watch/',
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={link}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
