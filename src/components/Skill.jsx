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
} from "./Links";
function Skill() {
  const skill_icon_attr = "m-auto -translate-y-1 ";
  const prog_langs = [
    {
      name: "C++",
      level: "Intermediate",
      icons: <C className={skill_icon_attr} />,
    },
    {
      name: "Python",
      level: "Intermediate",
      icons: <Python className={skill_icon_attr} />,
    },
    {
      name: "Javascript",
      level: "Intermediate",
      icons: <Javascript className={skill_icon_attr} />,
    },
    {
      name: "Html",
      level: "Intermediate",
      icons: <Html className={skill_icon_attr} />,
    },
    {
      name: "Mysql",
      level: "Intermediate",
      icons: <Mysql className={skill_icon_attr} />,
    },
  ];
  const fronted_tools = [
    {
      name: "Tailwindcss",
      level: "Intermediate",
      icons: <Tailwindcss className={skill_icon_attr} />,
    },

    {
      name: "Reactjs",
      level: "Intermediate",
      icons: <Reactjs className={skill_icon_attr} />,
    },
    {
      name: "Nextjs",
      level: "Intermediate",
      icons: <Nextjs className={skill_icon_attr} />,
    },
    {
      name: "ReactNative",
      level: "Intermediate",
      icons: <ReactNative className={skill_icon_attr} />,
    },
    {
      name: "Css",
      level: "Intermediate",
      icons: <Css className={skill_icon_attr} />,
    },
  ];
  const design_tools = [
    {
      name: "Blender",
      level: "Intermediate",
      icons: <Blender className={skill_icon_attr} />,
    },
    {
      name: "Unity",
      level: "Intermediate",
      icons: <Unity className={skill_icon_attr} />,
    },
    {
      name: "Figma",
      level: "Intermediate",
      icons: <Figma className={skill_icon_attr} />,
    },
  ];
  const familiar_with = [
    {
      name: "Numpy",
      level: "Intermediate",
      icons: <Numpy className={skill_icon_attr} />,
    },
    {
      name: "Pandas",
      level: "Intermediate",
      icons: <Pandas className={skill_icon_attr} />,
    },
    {
      name: "Tensorflow",
      level: "Intermediate",
      icons: <Tensorflow className={skill_icon_attr} />,
    },
  ];
  return (
    <div className="lg:w-[60%] w-[90%]    lg:mt-[5vh] ">
      <h1 className=" text-2xl mb-4 text-center sm:text-left text-midblue">
        SKILL
      </h1>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="Programming-Languages m-auto   text-wrap mt-0">
          <h2 className=" text-xl font-bold my-4   text-center">
            Programming Language
          </h2>
          <Line />
          <ul className="flex flex-col m-auto ">
            {prog_langs.map((lang, index) => {
              return (
                <li key={index} className="flex m-auto gap-5">
                  <div className="bg-blue  m-auto flex justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20  w-10 h-10 rounded-md p-2 hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                    {lang.icons}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm ">{lang.name}</h3>
                    <p className="text-lightblue ">{lang.level}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Frontend_tools m-auto mt-0">
          <h2 className="text-xl font-bold text-center m-auto my-4">
            Frontend Tools
          </h2>
          <Line />
          <div className="flex m-auto gap-5">
            <ul>
              {fronted_tools.map((tool, index) => {
                return (
                  <li key={index} className="flex  gap-5">
                    <div className="bg-blue flex m-auto justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20  w-10 h-10 rounded-md p-2 hover:ring-1 hover:bg-opacity-20 hover:bg-white ring-blue transition duration-500">
                      {tool.icons}
                    </div>
                    <div>
                      <h3 className=" text-sm font-bold">{tool.name}</h3>
                      <p className="text-lightblue ">{tool.level}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="Design_Tools m-auto mt-0">
          <h2 className="text-xl font-bold  text-center m-auto my-4">
            Design Tools
          </h2>
          <Line />
          <div className="flex m-auto gap-5">
            <ul>
              {design_tools.map((tool, index) => {
                return (
                  <li key={index} className="flex  gap-5">
                    <div className="bg-blue flex m-auto justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20  w-10 h-10 rounded-md p-2 hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                      {tool.icons}
                    </div>
                    <div>
                      <h3 className=" text-sm font-bold">{tool.name}</h3>
                      <p className="text-lightblue ">{tool.level}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="Familiar_With m-auto mt-0">
          <h2 className="text-xl font-bold  m-auto my-4">Familiar With</h2>
          <Line />
          <div className="flex m-auto gap-5">
            <ul>
              {familiar_with.map((tool, index) => {
                return (
                  <li key={index} className="flex  gap-5">
                    <div className="bg-blue  flex m-auto justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20  w-10 h-10 rounded-md p-2 hover:ring-1 ring-blue transition duration-500 hover:bg-opacity-20 hover:bg-white">
                      {tool.icons}
                    </div>
                    <div>
                      <h3 className=" text-sm font-bold">{tool.name}</h3>
                      <p className="text-lightblue ">{tool.level}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Skill;
