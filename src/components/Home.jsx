import React from "react";

import pic from "../assets/Myphoto.jpg";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import cv from "../assets/Resume.pdf";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-[80px] mb-[80px]"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2">
            <h1 className="text-2xl md:text-4xl text-slate-900">Hi, 👋 Suraj here</h1>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="text-slate-900">I'm a</h1>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={[
                  "Frontend Developer",
                  "Backend Developer",
                  "UI Designer",
                ]}
                typeSpeed={40}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-[15px] font-medium text-justify text-slate-800">
              Hi there! I'm Suraj Maurya, a passionate MERN stack developer with a keen
              interest in crafting robust and scalable web applications. I
              specialize in leveraging the MERN (MongoDB, Express.js, React,
              Node.js) stack to build dynamic user interfaces and seamless
              backend services.
            </p>
            <br />
            <button className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-white hover:text-black duration-300 border">
              <a href={cv} download>
                Download CV
              </a>
            </button>
            <br />
            <br />
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-semibold text-[16.48px] text-center text-slate-900">
                  Available on
                </h1>
                <ul className="flex space-x-4 text-slate-900">
                  <li>
                    <a
                      href="https://wa.me/9354761682"
                      target={"_blank"}
                    >
                      <FaWhatsappSquare className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/suraj-maurya93?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target={"_blank"}
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/surajmaurya93" target={"_blank"}>
                      <FaGithubSquare className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/suraj_maurya_1508?igsh=NnUzZnljdmk3ZHpt"
                      target={"_blank"}
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-[16.48px] text-slate-900">
                  Currently Working on
                </h1>
                <div className="flex space-x-4 text-slate-900">
                  <SiMongodb
                    className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                  <SiExpress
                    className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                  <FaReact
                    className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                  <FaNodeJs 
                    className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-10 mt-9 mb-[-10px] order-1 md:order-2 self-center">
            <img
              src={pic}
              className="rounded-full h-[390px] w-[390px] md:w-[450px] md:h-[450px] bor"
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Home;
