import React from "react";
import Line from "./Line";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import skill_img from "../img/skill_img.png";
import { Github, Eye } from "./Links";

const frontend_projects = [
  {
    name: "Portfolio",
    description: "My portfolio website",
    github: "",
    demo: "",
    img: skill_img,
  },
  {
    name: "Portfolio",
    description: "My portfolio website",
    github: "",
    demo: "",
    img: skill_img,
  },
  {
    name: "Portfolio",
    description: "My portfolio website",
    github: "",
    demo: "",
    img: skill_img,
  },
  {
    name: "Portfolio",
    description: "My portfolio website",
    github: "",
    demo: "",
    img: skill_img,
  },
];
function Projects() {
  return (
    <div className="lg:w-[60%] w-[90%]  mt-[10vh] lg:mt-[5vh]   ">
      <h1 className=" text-2xl mb-4 text-center sm:text-left">PROJECTS</h1>
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-[5em] justify-center">
        <div className="Frontend_Projects lg:w-[40%]  ">
          <h1 className=" text-2xl mb-4 text-center">Frontend Projects</h1>
          <Carousel useKeyboardArrows className=" rounded-lg p-4">
            {frontend_projects.map((project, index) => {
              return (
                <div key={index} className="flex flex-col ">
                  <div className="my-4  ">
                    <div className="bg-blue backdrop-filter  backdrop-blur-md bg-opacity-20 m-1 p-4 rounded-2xl hover:ring-2 ring-white">
                      <img
                        src={project.img}
                        alt="project_img"
                        className="   "
                      />
                    </div>
                    <div className="flex gap-4  my-4 grow-1">
                      <a
                        className=" group  flex-none bg-gradient-to-t lg:flex from-cayn to-blue p-2 rounded-md"
                        href={project.github}
                      >
                        <Github className="group-hover:scale-125  transition duration-500 ease-in-out" />
                      </a>
                      <p className="grow bg-blue p-2 rounded-xl !text-white text-center flex justify-center items-center">
                        {project.name}
                      </p>
                      <a
                        className=" group flex-none bg-gradient-to-t lg:flex from-cayn to-blue  p-2 rounded-md"
                        href={project.demo}
                      >
                        <Eye className="group-hover:scale-125 transition duration-500 ease-in-out" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Other_Projects lg:w-[40%] ">
          <h1 className=" text-2xl mb-4 text-center">Other Projects</h1>
          <Carousel useKeyboardArrows className=" p-4">
            {frontend_projects.map((project, index) => {
              return (
                <div key={index} className="flex flex-col ">
                  <div className="my-4">
                    <div className="bg-blue backdrop-filter m-1 backdrop-blur-md bg-opacity-20 p-4 rounded-2xl hover:ring-2 ring-white">
                      <img
                        src={project.img}
                        alt="project_img"
                        className="   "
                      />
                    </div>
                    <div className="flex gap-4  my-4 grow-1">
                      <a
                        className="group flex-none bg-gradient-to-t  lg:flex from-cayn to-blue p-2 rounded-md"
                        href={project.github}
                      >
                        <Github className="group-hover:scale-125 transition duration-500 ease-in-out" />
                      </a>
                      <p className="grow bg-blue p-2 rounded-xl !text-white text-center flex justify-center items-center ">
                        {project.name}
                      </p>
                      <a
                        className=" group flex-none bg-gradient-to-t lg:flex from-cayn to-blue  p-2 rounded-md"
                        href={project.demo}
                      >
                        <Eye className="group-hover:scale-125 transition duration-500 ease-in-out" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Projects;
