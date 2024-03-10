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
import { CiCircleChevUp } from "react-icons/ci";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link, NavLink } from "react-router-dom";

import Hamburger from "hamburger-react";

function Head() {
  //Theme switching
  const [theme, setTheme] = useState("dark");
  const [isDarkMode, setDarkMode] = useState(false);
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

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
    setIsActive(!isActive);
  };
  //

  const [isOpen, setOpen] = useState(false);
  const isdark = true;
  const items = [
    {
      id: 1,
      name: <CiHome className="m-auto " />,
      description: "Welcome",
    },
    {
      id: 2,
      name: <CiUser className="m-auto" />,
      description: "About",
    },

    {
      id: 3,
      name: <CiGrid42 className="m-auto" />,
      description: "Skill",
    },
    {
      id: 4,
      name: <CiMonitor className="m-auto" />,
      description: "Projects",
    },
    {
      id: 5,
      name: <CiPhone className="m-auto" />,
      description: "Contact",
    },
  ];

  return (
    <div className="w-full m-auto flex justify-center select-none ">
      <div className="bg-midblue dark:bg-gray backdrop backdrop-blur-md dark:bg-opacity-20 bg-opacity-20 w-full h-[10vh] rounded-b-xl lg:hidden fixed z-40 "></div>
      <div className="fixed top-2 lg:hidden z-50 left-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } lg:block mt-8 lg:mt-3 z-20 lg:bg-gradient-to-r from-cayn fixed   to-blue w-[95%] shadow-3xl bg-midblue  p-3 pb-2  m-2 backdrop-filter   backdrop-blur-md bg-opacity-40   rounded-lg shadow-2xl  lg:w-[60%] `}
      >
        <div className="flex lg:flex-row lg:-end flex-col  gap-4 m-auto justify-around lg:py-0 pt-8">
          {items.map((item) => (
            <a
              href={`#${item.description}`}
              key={item.id}
              onClick={handleClick}
              className={`group  border-b-[1px] p-4 border-gray py-2 lg:py-0 lg:border-0   hover:text-slate  rounded-xl    transition duration-450 ease-in-out text-white text-xl  flex flex-col justify-center items-center cursor-pointer
              
              }`}
            >
              {item.name}
              <span className="text-sm lg:invisible lg:group-hover:visible group-hover:text-slate text-center text-white  ">
                {item.description}
              </span>
            </a>
          ))}

          <span className={`flex justify-center lg:hidden cursor-pointer `}>
            <CiCircleChevUp
              className="text-white text-[2em]  "
              onClick={(prev) => setOpen(!prev)}
            />
          </span>
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
