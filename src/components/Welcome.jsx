import React from "react";
import user_img from "../img/user_img.png";
import Line from "./Line";
import TypingEffect from "./effect/TypingEffect";
import { useState } from "react";
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Welcome() {
  const icon_attr = "sm:text-xl text-4xl m-auto self-center";
  const social_link = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/kushaljgec2025",
      icon: <FaGithub className={icon_attr} />,
    },
    {
      id: 2,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kushaljgec2025/",
      icon: <FaLinkedin className={icon_attr} />,
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://twitter.com/kg_codex2",
      icon: <FaXTwitter className={icon_attr} />,
    },
    {
      id: 4,
      name: "Youtube",
      link: "https://www.youtube.com/@kushal_ghosh_iit_madras",
      icon: <FaYoutube className={icon_attr}></FaYoutube>,
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full items-center pt-[15vh] ">
        <div className="lg:w-[70%] w-[90%] min-h-screen  " data-aos="fade-up">
          <div className="  flex  lg:flex-row flex-col justify-center gap-4  ">
            <div className=" flex basis-1/2  justify-cente m-auto rounded-full border-5 border-gray   ">
              <img
                className=" z-1 aspect-square m-auto"
                src={user_img}
                alt="user_img"
              />
            </div>

            <div className=" basis-1/2 flex justify-center flex-col   gap-5 ">
              <h1 className="text-xl">HEY , I AM</h1>
              <h1 className="name-heading text-5xl font-semibold  from-cayn to-blue bg-gradient-to-r bg-clip-text ">
                Kushal Ghosh
              </h1>
              <p className="dark:bg-white bg-gray bg-opacity-40 p-2 rounded-lg shadow-sm font-medium  ">
                I'm <strong className="text-cayn">Kushal Ghosh</strong> — an{" "}
                <strong className="text-cayn">
                  AI/ML and Software Development
                </strong>{" "}
                enthusiast. I've solved{" "}
                <strong className="text-cayn">1500+</strong> DSA problems across
                platforms like LeetCode, Codeforces, and CodeChef. I love
                turning complex challenges into clean, efficient solutions.
              </p>
              <div className="flex md:flex-row flex-col w-full justify-around gap-4">
                {social_link.map((item) => {
                  return (
                    <NavLink
                      to={item.link}
                      target="_blank"
                      key={item.id}
                      className="w-full flex flex-row gap-2 cursor-pointer  justify-center items-center py-6 md:py-4 max-w-[64vw] h-10 bg-slate text-white dark:bg-white dark:text-slate rounded-full m-auto hover:scale-105 duration-300 transform hover:shadow-xl ring-1  ring-gray "
                    >
                      <div className="">{item.icon}</div>
                      <div className=" font-medium text-xl basis-1/3 ">
                        {item.name}
                      </div>
                    </NavLink>
                  );
                })}
              </div>
              <TypingEffect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
