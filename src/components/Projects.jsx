import React from "react";
import Line from "./Line";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import skill_img from "../img/skill_img.png";
import Protfolio_img from "../img/Protfolio_img.png";
import Foodzone_img from "../img/Foodzone_img.png";
import Climesky_img from "../img/Climesky_img.png";
import { Github, Eye } from "./Links";

const frontend_projects = [
  {
    name: "Portfolio",
    description: "My portfolio website",
    github: "https://github.com/kushaljgec2025/Protfolio_Kushal_Ghosh",
    demo: "https://protfolio-kushal-ghosh.vercel.app/",
    img: Protfolio_img,
  },
  {
    name: "FoodZone",
    description: "Food Reciepe Website",
    github: "https://github.com/kushaljgec2025/foodzone",
    demo: "https://foodzone-ten.vercel.app/",
    img: Foodzone_img,
  },
  {
    name: "Clime-Sky",
    description: "WeatherAppp",
    github: "https://github.com/kushaljgec2025/Clime-Sky-waetherApp",
    demo: "https://kushaljgec2025.github.io/Clime-Sky-waetherApp/",
    img: Climesky_img,
  },
];

const other_projects = [
  {
    name: "StockPrediction",
    description: "Stpck Market Price Prediction",
    github:
      "https://github.com/kushaljgec2025/Stock_Market_Price_Prediction_Using-RNN",
    demo: "stockmarketpricepredictionusing-rnn.streamlit.app",
    img: skill_img,
  },
  {
    name: "Voice Assistant",
    description: "Voice Assistant using Python",
    github:
      "https://github.com/kushaljgec2025/MOVA-My-Original-Voice-Assistant",
    demo: "https://github.com/kushaljgec2025/MOVA-My-Original-Voice-Assistant",
    img: skill_img,
  },
];
function Projects() {
  return (
    <div
      className="lg:w-[70%] w-[90%]  mt-[10vh] lg:mt-[5vh]   "
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h1 className=" text-2xl mb-4 text-center sm:text-left text-midblue">
        PROJECTS
      </h1>
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-[5em] justify-center">
        <div className="Frontend_Projects lg:w-[40%]  ">
          <h1 className=" text-2xl mb-4 text-center">Frontend Projects</h1>
          <div className="rounded-3xl overflow-hidden ">
            <Carousel
              useKeyboardArrows
              autoPlay
              infiniteLoop
              showThumbs={false}
              className="rounded-3xl  p-4 overflow-hidden flex flex-col justify-center items-center"
            >
              {frontend_projects.map((project, index) => {
                return (
                  <div key={index} className="rounded-3xl overflow-hidden ">
                    <div className="bg-gradient-to-t from-black/60 to-transparent overflow-hidden  backdrop-filter relative rounded-3xl  backdrop-blur-md bg-opacity-20  hover:ring-2 ring-white">
                      <img
                        src={project.img}
                        alt="project_img"
                        className="rounded-3xl overflow-hidden object-cover"
                      />
                    </div>
                    <div className="flex absolute inset-0 justify-ends items-end gap-2 rounded-3xl overflow-hidden  m-3 mb-3 grow-1">
                      <a
                        className=" group  flex-none    p-2 rounded-full bg-slate bg-opacity-50 backdrop backdrop-blur-md  transition duration-500 ease-in-out "
                        href={project.github}
                        target="_blank"
                      >
                        <Github className="group-hover:scale-125  transition duration-500 ease-in-out " />
                      </a>
                      <p className="grow   py-3 rounded-xl !text-white text-center flex justify-center items-center   transition duration-500 ease-in-out ">
                        {project.name}
                      </p>
                      <a
                        className=" group flex-none  p-2  rounded-full bg-slate bg-opacity-50 backdrop backdrop-blur-md transition duration-500 ease-in-out "
                        href={project.demo}
                        target="_blank"
                      >
                        <Eye className="group-hover:scale-125 transition duration-500 ease-in-out " />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="Other_Projects lg:w-[40%] ">
          <h1 className=" text-2xl mb-4 text-center">Other Projects</h1>
          <Carousel
            useKeyboardArrows
            infiniteLoop
            autoPlay
            showThumbs={false}
            className=" p-4"
          >
            {other_projects.map((project, index) => {
              return (
                <div key={index} className=" ">
                  <div className="bg-gradient-to-t from-black/60 to-transparent backdrop-filter relative  backdrop-blur-md bg-opacity-20  rounded-3xl hover:ring-2 ring-white">
                    <img
                      src={project.img}
                      alt="project_img"
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex absolute inset-0 justify-ends items-end gap-2 rounded-3xl overflow:hidden  m-3 mb-3 grow-1">
                    <a
                      className=" group  flex-none    p-2 rounded-full bg-slate bg-opacity-50 backdrop backdrop-blur-md  transition duration-500 ease-in-out "
                      href={project.github}
                      target="_blank"
                    >
                      <Github className="group-hover:scale-125  transition duration-500 ease-in-out " />
                    </a>
                    <p className="grow   py-3 rounded-xl !text-white text-center flex justify-center items-center   transition duration-500 ease-in-out ">
                      {project.name}
                    </p>
                    <a
                      className=" group flex-none  p-2  rounded-full bg-slate bg-opacity-50 backdrop backdrop-blur-md transition duration-500 ease-in-out "
                      href={project.demo}
                      target="_blank"
                    >
                      <Eye className="group-hover:scale-125 transition duration-500 ease-in-out " />
                    </a>
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
