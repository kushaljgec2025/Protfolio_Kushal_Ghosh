import React from "react";
import Line from "./Line";
import user_img1 from "../img/user_img1.jpg";

import { Github, Facebook, Instagram, Linkedin } from "./Links";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoIosPaper } from "react-icons/io";
function About() {
  const icon_attr =
    "hover: lg:text-[1em] text-[0.8em]  transition duration ease-in-out ";
  const about_links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/kggibesup/",
      icon: <FaFacebook className={icon_attr} size={"3em"} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/kishueal/",
      icon: <FaInstagram className={icon_attr} size={"3em"} />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kushaljgec2025/",
      icon: <FaLinkedin className={icon_attr} size={"3em"} />,
    },
    {
      name: "Github",
      link: "https://github.com/kushaljgec2025",
      icon: <FaGithub className={icon_attr} size={"3em"} />,
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full items-center pt-[15vh]">
        <div className="lg:w-[70%] w-[90%]  min-h-screen " data-aos="fade-up">
          <h1 className=" text-2xl   text-center sm:text-left text-midblue">
            ABOUT
          </h1>
          <div className="">
            <p>
              Hello, I'm <strong>Kushal Ghosh</strong> — an{" "}
              <strong>M.Tech student at IIT Madras</strong> and a{" "}
              <strong>GATE 2025 AIR 49 ranker</strong>. I'm passionate about{" "}
              <strong>Competitive Programming</strong> and have solved over{" "}
              <strong>1500 problems</strong> across platforms like{" "}
              <strong>LeetCode (Knight)</strong>,{" "}
              <strong>Codeforces (Specialist)</strong>,{" "}
              <strong>CodeChef</strong>, and <strong>AtCoder</strong>.
              Alongside, I have a strong interest in <strong>AI/ML</strong> and{" "}
              <strong>Frontend Development</strong>, and I’m always eager to
              sharpen my skills in <strong>software development</strong>. I’ve
              worked with technologies like <strong>React.js</strong>,{" "}
              <strong>Tailwind CSS</strong>, <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
              <strong>Python</strong>, building dynamic and responsive web
              applications. My enthusiasm for exploring{" "}
              <strong>emerging technologies</strong> keeps pushing me to learn
              and build. You can check out my work in the{" "}
              <strong>Projects</strong> section, and feel free to connect via
              the <strong>Contact</strong> section — I’m always open to new
              opportunities and collaborations!
            </p>

            <div className="group relative about_img lg:w-[60%] rounded-2xl   overflow-hidden my-5 mx-auto shadow-2xl ">
              <img
                className="   group-hover:scale-110 transition duration-300 ease-in-out object-cover m-auto "
                src={user_img1}
                alt="img"
              />
            </div>
            <div className="   flex z-10 justify-around md:w-[60%] m-auto items-end gap-4 py-2   ">
              {about_links.map((link, index) => (
                <a
                  className=" dark:text-slate text-white ring-1 ring-gray hover:ring-midblue hover:ring-2 hover:scale-105 duration-300  p-1 rounded-lg hover:shadow-xl "
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className=" flex flex-row justify-between lg:w-[80%] items-end m-auto my-4  gap-5">
              <Link
                to="https://blog-page-two-kohl.vercel.app/"
                target="_blank"
                className="w-full flex flex-row gap-2 cursor-pointer  justify-center items-center py-6 md:py-4 max-w-[64vw] h-10 bg-slate text-white dark:bg-white dark:text-slate rounded-full m-auto hover:scale-105 duration-300 transform hover:shadow-xl ring-1  ring-gray "
              >
                My Blogs
                <span>
                  <FaBloggerB />
                </span>
              </Link>
              <Link
                className="w-full flex flex-row gap-2 cursor-pointer  justify-center items-center py-6 md:py-4 max-w-[64vw] h-10 bg-slate text-white dark:bg-white dark:text-slate rounded-full m-auto hover:scale-105 duration-300 transform hover:shadow-xl ring-1  ring-gray "
                to="https://drive.google.com/file/d/1qOpaZvwO07Fif4eWC2oa_GKH7VstCxIT/view?usp=drive_link"
                target="_blank"
              >
                My Resume
                <span>
                  <IoIosPaper />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
