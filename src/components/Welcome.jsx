import React from "react";
import user_img from "../img/user_img.png";
import Line from "./Line";

import { useState } from "react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
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
              <h1>HEY , I AM</h1>
              <h1 className="name-heading text-5xl font-semibold  from-cayn to-blue bg-gradient-to-r bg-clip-text ">
                Kushal Ghosh
              </h1>
              <p className="dark:bg-white bg-gray bg-opacity-40 p-2 rounded-lg shadow-sm font-medium  ">
                A dedicated Frontend Developer and avid competitive programmer,
                deeply passionate about Data Structures and Algorithms, driven
                by a fervent enthusiasm for problem-solving.
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
              <div className="">
                <div className=" w-[calc(100%-16vw)] ">
                  <h1 className="p-1 animate-typing leading-tight overflow-hidden    whitespace-nowrap border-r-4 border-r-gray pr-5 text-5xl text-white dark:text-slate  font-bold">
                    kg_codex
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
