import React from "react";
import Line from "./Line";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import skill_img from "../img/skill_img.png";
import Protfolio_img from "../img/Protfolio_img.png";
import Foodzone_img from "../img/FoodZone_img.jpg";
import Climesky_img from "../img/Climesky_img.jpg";
import Zenrit_img from "../img/Zenrit_img.png";
import StockPrediction_img from "../img/StockPrediction_img.png";
import MOVA_img from "../img/MOVA_img.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const frontend_projects = [
  {
    name: "ZenWrit",
    description:
      "Developed a full-stack blogging platform using React.js and Appwrite BaaS for authentication and OAuth. Utilized Redux Toolkit for state management and Tailwind CSS for responsive design.",
    github: "https://github.com/kushaljgec2025/BlogPage",
    demo: "https://blog-page-two-kohl.vercel.app/",
    img: Zenrit_img,
    skill: ["React.js", "Redux Toolkit", "Tailwind CSS", "Appwrite BaaS"],
  },
  {
    name: "Portfolio",
    description:
      "Developed a portfolio using React.js, emphasizing component-based architecture. Leveraged functional components and hooks for scalable code. Styled with Tailwind CSS, prioritizing a utility-first approach for visually appealing and responsive layouts.",
    github: "https://github.com/kushaljgec2025/Protfolio_Kushal_Ghosh",
    demo: "https://protfolio-kushal-ghosh.vercel.app/",
    img: Protfolio_img,
    skill: ["React.js", "Tailwind CSS", "React Hooks", "React Router"],
  },
  {
    name: "Clime-Sky",
    description:
      "Constructed a weather website using HTML, CSS, and JavaScript, utilizing Geolocation and Geocoding APIs to dynamically fetch the user's current location. Integrated the OpenWeatherMap API to display real-time weather information based on the user's location.",
    github: "https://github.com/kushaljgec2025/Clime-Sky-waetherApp",
    demo: "https://kushaljgec2025.github.io/Clime-Sky-waetherApp/",
    img: Climesky_img,
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "OpenWeatherMap API",
      "Geolocation API",
    ],
  },

  {
    name: "Food Zone",
    description:
      "Implemented dynamic food and recipe searching using the Edamam Food Recipe API. Utilized useState and useEffect for dynamic search features and employed props and hooks to display ingredients.",
    github: "https://github.com/kushaljgec2025/foodzone",
    demo: "https://foodzone-ten.vercel.app/",
    img: Foodzone_img,
    skill: ["React.js", "Edamam Food Recipe API"],
  },
];

const other_projects = [
  {
    name: "Stock Price Prediction",
    description:
      "Stock Market Price Prediction using RNN. Implemented in Python with Streamlit for demo. Utilized machine learning techniques for analysis and forecasting. GitHub repository available for reference.",
    github:
      "https://github.com/kushaljgec2025/Stock_Market_Price_Prediction_Using-RNN",
    demo: "stockmarketpricepredictionusing-rnn.streamlit.app",
    img: StockPrediction_img,
    skill: ["Machine Learning", "Python", "RNN", "Streamlit"],
  },
  {
    name: "Voice Assistant",
    description:
      "Voice Assistant project using Python. Developed with machine learning and speech recognition using Pyttsx3. GitHub repository and demo available for exploration.ss",
    github:
      "https://github.com/kushaljgec2025/MOVA-My-Original-Voice-Assistant",
    demo: "https://github.com/kushaljgec2025/MOVA-My-Original-Voice-Assistant",
    img: MOVA_img,
    skill: ["Machine Learning", "Python", "Speech Recognition", "Pyttsx3"],
  },
];
function Projects() {
  return (
    <div className="flex justify-center w-full items-center pt-[15vh]">
      <div className="lg:w-[70%] w-[90%] min-h-screen " data-aos="fade-up">
        <h1 className=" text-2xl mb-4 text-center sm:text-left text-midblue">
          PROJECTS
        </h1>
        <div className="flex flex-col gap-10 lg:gap-[3em] justify-center">
          <div>
            <h1 className=" text-2xl mb-4 text-center font-semibold">
              Web Development Projects
            </h1>
            <div className="flex flex-col  gap-4">
              {frontend_projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray flex sm:flex-row flex-col gap-4 p-4 rounded-lg shadow-lg  items-start"
                >
                  <div className=" basis-1/4">
                    <img
                      src={project.img}
                      alt="project_img"
                      className=" rounded-xl shadow-xl aspect-square"
                    />
                  </div>
                  <div className=" basis-3/4 flex flex-col   dark:text-white text-slate gap-2">
                    <h1 className="text-2xl font-bold">{project.name}</h1>
                    <p className="font-light">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.skill.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray dark:bg-slate  m-1 px-2 py-1 rounded-full text-xs "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 ">
                      <Link
                        to={project.github}
                        target="_blank"
                        className="border-2 p-1 rounded-full border-slate dark:border-white hover:text-blue text-2xl"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        to={project.demo}
                        target="_blank"
                        className="border-2 p-1 rounded-full border-slate dark:border-white hover:text-blue text-2xl"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className=" text-2xl mb-4 text-center font-semibold">
              Other Projects
            </h1>
            <div className="flex flex-col  gap-4">
              {other_projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray flex sm:flex-row flex-col gap-4 p-4 rounded-lg shadow-lg  items-start"
                >
                  <div className=" basis-1/4">
                    <img
                      src={project.img}
                      alt="project_img"
                      className=" rounded-xl shadow-xl aspect-square"
                    />
                  </div>
                  <div className=" basis-3/4 flex flex-col   dark:text-white text-slate gap-2">
                    <h1 className="text-2xl font-bold">{project.name}</h1>
                    <p className="font-light">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.skill.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray dark:bg-slate  m-1 px-2 py-1 rounded-full text-xs "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 ">
                      <Link
                        to={project.github}
                        target="_blank"
                        className="border-2 p-1 rounded-full border-slate dark:border-white hover:text-blue text-2xl"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        to={project.demo}
                        target="_blank"
                        className="border-2 p-1 rounded-full border-slate dark:border-white hover:text-blue text-2xl"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
}

export default Projects;
