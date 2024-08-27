import React from "react";
import Slider from "react-slick"; // Importing react-slick for carousel
import "slick-carousel/slick/slick.css"; // Importing slick carousel CSS
import "slick-carousel/slick/slick-theme.css";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import blender from "../assets/blender.png";
import socket from "../assets/socket.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongoose from "../assets/mongoose.jpeg";
import postman from "../assets/postman.png";
import express from "../assets/express.png";

const technologies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const firstRowTechs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
  ];

  const secondRowTechs = [
    { id: 6, src: node, title: "NodeJs", style: "shadow-green-400" },
    { id: 7, src: express, title: "ExpressJs", style: "shadow-white" },
    { id: 8, src: mongoose, title: "Mongoose", style: "shadow-green-400" },
    { id: 9, src: socket, title: "Socket.io", style: "shadow-white" },
    { id: 10, src: blender, title: "Blender", style: "shadow-orange-400" },
    { id: 11, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 12, src: postman, title: "Postman", style: "shadow-pink-400" },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full min-h-screen py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Technologies
          </p>
          <p className="py-6 text-lg">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="mb-12">
          <Slider {...settings}>
            {firstRowTechs.map(({ id, src, title, style }) => (
              <div key={id} className={`p-4`}>
                <div
                  className={`shadow-md hover:scale-105 duration-500 py-4 px-6 rounded-lg ${style} flex flex-col items-center justify-center`}
                >
                  <img
                    src={src}
                    alt={title}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <p className="text-center font-semibold text-lg">{title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <Slider {...settings}>
            {secondRowTechs.map(({ id, src, title, style }) => (
              <div key={id} className={`p-4`}>
                <div
                  className={`shadow-md hover:scale-105 duration-500 py-4 px-6 rounded-lg ${style} flex flex-col items-center justify-center`}
                >
                  <img
                    src={src}
                    alt={title}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <p className="text-center font-semibold text-lg">{title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default technologies;
