import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello Guys, I am Shiv Pratap Singh from Gorakhpur, Uttar Pradesh. I expect you know Gorakhpur, haha that's funny.
          So let me introduce more about myself. I am currently pursuing Bachelor Degree from Vellore Institute Of Technology, Bhopal
          in Computer Science and Engineering with specialization in Gaming Technology. I have done my 10th and 12th from Metropolitan 
          School (ICSE Board). I scored 85% in 10th and 84% in 12th. Currently I am a Full Stack Developer and I am proficient in JAVA programming language and its being 7 Years I am coding in Java.
        </p>

        <br />

        <p className="text-xl">
          My Hobbies are trading and Gaming. I love trading a lot. I am also a  
          Long Term investor. I love playing games with my friends.
        </p>
      </div>
    </div>
  );
};

export default About;
