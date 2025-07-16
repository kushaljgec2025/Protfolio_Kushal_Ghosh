import React from "react";
import Line from "./Line";
import {
  C,
  Python,
  Javascript,
  Tailwindcss,
  Html,
  Css,
  Numpy,
  Pandas,
  Tensorflow,
  Reactjs,
  Nextjs,
  Unity,
  Blender,
  Figma,
  ReactNative,
  Mysql,
  DeviconAppwrite,
  Firebase,
  Mongodb,
  Shadcn,
} from "./Links";
function Skill() {
  const skill_icon_attr = "m-auto   ";
  const icon_size = "2em";
  const prog_langs = [
    {
      name: "C++",
      level: "Intermediate",
      icons: <C className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Python",
      level: "Beginner",
      icons: <Python className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Javascript",
      level: "Intermediate",
      icons: <Javascript className={skill_icon_attr} size={icon_size} />,
    },
  ];
  const Frontend_tools = [
    {
      name: "Reactjs",
      level: "Intermediate",
      icons: <Reactjs className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Tailwindcss",
      level: "Intermediate",
      icons: <Tailwindcss className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Shadcn",
      level: "Intermediate",
      icons: <Shadcn className={skill_icon_attr} size={icon_size} />,
    },

    {
      name: "ReactNative",
      level: "Intermediate",
      icons: <ReactNative className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Html",
      level: "Intermediate",
      icons: <Html className={skill_icon_attr} size={icon_size} />,
    },

    {
      name: "Css",
      level: "Intermediate",
      icons: <Css className={skill_icon_attr} size={icon_size} />,
    },
  ];
  const backend_and_database = [
    {
      name: "MySql",
      level: "Intermediate",
      icons: <Mysql className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "AppWrite",
      level: "Intermediate",
      icons: <DeviconAppwrite className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Firebase",
      level: "Intermediate",
      icons: <Firebase className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "MongoDB",
      level: "Beginner",
      icons: <Mongodb className={skill_icon_attr} size={icon_size} />,
    },
  ];
  const familiar_with = [
    {
      name: "Numpy",
      level: "Beginner",
      icons: <Numpy className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Pandas",
      level: "Beginner",
      icons: <Pandas className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Tensorflow",
      level: "Beginner",
      icons: <Tensorflow className={skill_icon_attr} size={icon_size} />,
    },
    {
      name: "Figma",
      level: "Intermediate",
      icons: <Figma className={skill_icon_attr} size={icon_size} />,
    },
  ];
  return (
    <div className="flex justify-center w-full items-center pt-[15vh]">
      <div className="lg:w-[70%] w-[90%] min-h-screen" data-aos="fade-up">
        <h1 className=" text-2xl mb-4 text-center sm:text-left text-midblue">
          SKILL
        </h1>
        <div className="flex md:flex-row w-full justify-around flex-col flex-wrap p-4 gap-4">
          <div className="Programming-Languages grow  mt-0">
            <h2 className="text-lg font-semibold my-4   text-center bg-white text-slate dark:bg-slate dark:text-white ">
              Programming Language
            </h2>

            <ul className="flex flex-col  justify-center items-center   ">
              {prog_langs.map((lang, index) => {
                return (
                  <li
                    key={index}
                    className="  flex justify-start   m-auto min-w-[80%] w-full items-center gap-5 "
                  >
                    <div className="bg-blue flex justify-center items-center   backdrop-filter backdrop-blur-md bg-opacity-20   rounded-md p-2 hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                      {lang.icons}
                    </div>

                    <div className="basis-1/2 md:basis-auto">
                      <h3 className="font-bold text-xl ">{lang.name}</h3>
                      <p className="text-lightblue dark:text-midblue  ">
                        {lang.level}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="backend grow mt-0">
            <h2 className="text-lg font-semibold my-4   text-center bg-white text-slate dark:bg-slate dark:text-white">
              Frontend Tools
            </h2>

            <ul className="flex flex-col  justify-center items-start   ">
              {Frontend_tools.map((lang, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start   m-auto min-w-[80%] w-full  items-center gap-5 "
                  >
                    <div className="bg-blue   flex justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20   rounded-md p-2 hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                      {lang.icons}
                    </div>
                    <div className="basis-1/2 md:basis-auto">
                      <h3 className="font-bold text-xl ">{lang.name}</h3>
                      <p className="text-lightblue dark:text-midblue  ">
                        {lang.level}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="backend grow mt-0">
            <h2 className="text-lg font-semibold my-4   text-center bg-white text-slate dark:bg-slate dark:text-white">
              Backend and Database
            </h2>

            <ul className="flex flex-col  justify-center items-start   ">
              {backend_and_database.map((lang, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start   m-auto min-w-[80%] w-full  items-center gap-5 "
                  >
                    <div className="bg-blue   flex justify-center items-center p-2 backdrop-filter backdrop-blur-md bg-opacity-20   rounded-md  hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                      {lang.icons}
                    </div>
                    <div className="basis-1/2 md:basis-auto">
                      <h3 className="font-bold text-xl ">{lang.name}</h3>
                      <p className="text-lightblue dark:text-midblue  ">
                        {lang.level}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="familliar-with grow mt-0">
            <h2 className="text-lg font-semibold my-4   text-center bg-white text-slate dark:bg-slate dark:text-white">
              Familliar with
            </h2>

            <ul className="flex flex-col  justify-center items-start   ">
              {familiar_with.map((lang, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start   m-auto min-w-[80%] w-full  items-center gap-5 "
                  >
                    <div className="bg-blue   flex justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20   rounded-md p-2 hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                      {lang.icons}
                    </div>
                    <div className="basis-1/2 md:basis-auto">
                      <h3 className="font-bold text-xl ">{lang.name}</h3>
                      <p className="text-lightblue dark:text-midblue  ">
                        {lang.level}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <div>skill</div> */}
    </div>
  );
}

export default Skill;
