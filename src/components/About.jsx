import React from "react";
import Line from "./Line";
import user_img2 from "../img/user_img2.jpg";
import { Github, Facebook, Instagram, Linkedin } from "./Links";
import { FaBloggerB } from "react-icons/fa";

import { IoIosPaper } from "react-icons/io";
function About() {
  const icon_attr =
    "hover:scale-125 lg:text-[1em] text-[0.8em]  transition duration-500 ease-in-out shadow-xl";
  const about_links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/kggibesup/",
      icon: <Facebook className={icon_attr} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/kishueal/",
      icon: <Instagram className={icon_attr} />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kushaljgec2025/",
      icon: <Linkedin className={icon_attr} />,
    },
    {
      name: "Github",
      link: "https://github.com/kushaljgec2025",
      icon: <Github className={icon_attr} />,
    },
  ];
  return (
    <>
      <div
        className="lg:w-[70%] w-[90%] mt-[10vh] lg:mt-[5vh] "
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h1 className=" text-2xl   text-center sm:text-left text-midblue">
          ABOUT
        </h1>
        <div>
          <p>
            Hello, my name is Kushal Ghosh. I'm currently pursuing B.Tech in
            Information Technology at Jalpaiguri Government Engineering
            College(Autonomous). I am passionate about Competitive Programming
            and have solved over 1000 problems across platforms like CodeChef,
            Codeforces, LeetCode, and AtCoder.I am Knight at Leetcode and
            Specialist at Codeforce .Besides, I am interested in Frontend
            Development and continuously aim to improve my technical competency
            in software development area. My enthusiasm for exploring emerging
            technologies has broadened my horizons and expanded my interests. I
            have acquired valuable experience in working with technologies like
            HTML, CSS, JavaScript and Python with React.js and Tailwind CSS. If
            you would like to learn more about my work you can visit my Project
            Section. I am open to new opportunities and collaborations, and you
            can reach out to me through Contact Section.
          </p>
          <div className="group relative about_img lg:w-[80%] rounded-2xl   overflow-hidden my-5 mx-auto shadow-2xl ">
            <img
              className="   group-hover:scale-110 transition duration-500 ease-in-out object-fit m-auto "
              src={user_img2}
              alt="img"
            />
            <div className="  absolute inset-0 flex z-10 justify-around hover:bg-gradient-to-t from-black/40 to-transparent via-bg-transparent items-end gap-4 py-2   ">
              {about_links.map((link, index) => (
                <a
                  className=" bg-gray backdrop backdrop-blur-md bg-opacity-30 ring-1 ring-gray hover:ring-midblue hover:ring-2   p-1 rounded-lg shadow-xl "
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className=" flex flex-row justify-between lg:w-[80%] items-end m-auto  gap-5">
            <a
              className="bg-slate bg-opacity-50 backdrop backdrop-blur-md flex justify-center items-center w-[40vw]  transition duration-500 ease-in-out  gap-2  p-1 py-2 text-center rounded-md hover:shadow-2xl hover:ring-midblue hover:ring-2  dark:hover:text-white hover:text-gray  ring-white ring-1"
              href=""
            >
              My Blogs
              <span>
                <FaBloggerB />
              </span>
            </a>
            <a
              className="bg-slate bg-opacity-50 backdrop backdrop-blur-md flex justify-center items-center w-[40vw] transition duration-500 ease-in-out gap-2  p-1 py-2 text-center rounded-md hover:shadow-2xl hover:ring-midblue hover:ring-2 dark:hover:text-white  hover:text-gray  ring-white ring-1"
              href=""
            >
              My Resume
              <span>
                <IoIosPaper />
              </span>
            </a>
          </div>
        </div>

        <Line />
      </div>
    </>
  );
}

export default About;
