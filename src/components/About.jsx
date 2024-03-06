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
        <h1 className=" text-2xl   text-center sm:text-left">ABOUT</h1>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit magni
            sequi, ipsa veritatis voluptas iste assumenda minus porro. Odio
            cumque adipisci ad odit sunt eos impedit rem dolor quas expedita
            quod soluta consectetur voluptatum error accusamus, explicabo quo
            libero aut!lorem Ipsum dolor sit, amet consectetur adipisicing elit.
            Odit magni sequi, ipsa Lorem ipsum40\ Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error incidunt illum eius culpa
            laboriosam omnis dolores quasi, obcaecati excepturi? A nobis sint
            laudantium dolor. Hic maxime fuga consequatur assumenda nesciunt,
            accusamus quas quasi eligendi, error, mollitia molestiae
            necessitatibus voluptates repellendus vitae repudiandae nisi vel
            incidunt expedita atque. Consectetur sit non, nulla, dolores at
            necessitatibus eum facere odit quas fugit nobis? Magni reprehenderit
            quas voluptatum.
          </p>
          <div className="w-full rounded-2xl   overflow-hidden my-5 mx-auto shadow-2xl ">
            <img
              className="   hover:scale-125 transition duration-500 ease-in-out object-fit m-auto "
              src={user_img2}
              alt="img"
            />
          </div>
        </div>
        <div className="flex  justify-around gap-4 my-5">
          {about_links.map((link, index) => (
            <a
              className="group bg-gradient-to-t from-cayn to-blue p-1 rounded-md shadow-xl "
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <Line />
      </div>
    </>
  );
}

export default About;
