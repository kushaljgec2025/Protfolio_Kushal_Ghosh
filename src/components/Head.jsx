import React from "react";
import {
  CiPhone,
  CiUser,
  CiMonitor,
  CiPen,
  CiGrid42,
  CiHome,
  CiSun,
  CiCloudMoon,
} from "react-icons/ci";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import Hamburger from "hamburger-react";

function Head() {
  //Theme switching
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(setTheme);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //

  const [isOpen, setOpen] = useState(false);
  const isdark = true;
  const items = [
    {
      id: 1,
      name: <CiHome className="m-auto " />,
      description: "Home",
    },
    {
      id: 2,
      name: <CiUser className="m-auto" />,
      description: "About",
    },
    {
      id: 3,
      name: <CiPen className="m-auto" />,
      description: "Education",
    },
    {
      id: 4,
      name: <CiGrid42 className="m-auto" />,
      description: "Skill",
    },
    {
      id: 5,
      name: <CiMonitor className="m-auto" />,
      description: "Projects",
    },
    {
      id: 6,
      name: <CiPhone className="m-auto" />,
      description: "Contact",
    },
  ];

  return (
    <div className="w-full m-auto flex justify-center  ">
      <div className="bg-midblue dark:bg-gray backdrop backdrop-blur-md dark:bg-opacity-20 bg-opacity-20 w-full h-[10vh] rounded-b-xl lg:hidden fixed z-40 "></div>
      <div className="fixed top-2 lg:hidden z-50 left-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } lg:block mt-8 lg:mt-3 z-10 lg:bg-gradient-to-r from-cayn fixed to-blue w-[95%] shadow-3xl bg-midblue  p-3 pb-2  m-2 backdrop-filter   backdrop-blur-md bg-opacity-40   rounded-lg shadow-2xl  lg:w-[60%] `}
      >
        <div className="flex lg:flex-row flex-col gap-4 justify-around lg:py-0 py-8">
          {items.map((item) => (
            <a
              key={item.id}
              className="group border-b-[1px] border-gray lg:border-0    translate-y-2 lg:hover:-translate-y-1 transition duration-450 text-white text-xl  flex flex-col justify-center align-center"
            >
              {item.name}
              <span className="text-sm lg:invisible lg:group-hover:visible text-center text-white my-2 ">
                {item.description}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="fixed top-3 z-50 right-4 ">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}
          sunColor="#334155"
          // className="text-white"
        />
      </div>
    </div>
  );
}

export default Head;
