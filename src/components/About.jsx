import React from "react";
import Line from "./Line";
import user_img2 from "../img/user_img2.jpg";
import { Github, Facebook, Instagram, Linkedin } from "./Links";

function About() {
  const icon_attr =
    "group-hover:scale-125  transition duration-500 ease-in-out shadow-xl";
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
      <div className="lg:w-[60%] w-[90%] mt-[10vh] lg:mt-[5vh] ">
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
          <div className=" about_img w-full rounded-2xl   overflow-hidden my-5 mx-auto shadow-2xl ">
            <img
              className=" relative   hover:scale-125 transition duration-500 ease-in-out object-fit m-auto "
              src={user_img2}
              alt="img"
            />
          </div>
          <div className=" flex flex-row justify-between gap-5">
            <a
              className="bg-slate bg-opacity-50 backdrop backdrop-blur-md grow p-1 py-2 text-center rounded-md shadow-xl  ring-white ring-1"
              href=""
            >
              My Blogs
            </a>
            <a
              className="bg-slate bg-opacity-50 backdrop backdrop-blur-md grow p-1 py-2 text-center rounded-md shadow-xl ring-white ring-1"
              href=""
            >
              Hire Me
            </a>
          </div>
          <div className="flex z-10 justify-around gap-4 py-4   ">
            {about_links.map((link, index) => (
              <a
                className="group bg-gradient-to-t  from-cayn to-blue p-1 rounded-md shadow-xl "
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

        <Line />
      </div>
    </>
  );
}

export default About;
