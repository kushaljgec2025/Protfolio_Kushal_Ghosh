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
  CiBank,
} from "react-icons/ci";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { CiCircleChevUp } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

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

  const [isActive, setIsActive] = useState(1);
  const handleClick = (item) => {
    console.log(item);
    setOpen(!isOpen);
    setIsActive(item.id);
    console.log(isActive);
  };
  //

  const [isOpen, setOpen] = useState(false);
  const isdark = true;
  const items = [
    {
      id: 1,
      name: <CiHome className="m-auto self-center " />,
      description: "Welcome",
      link: "/",
    },
    {
      id: 2,
      name: <CiUser className="m-auto self-center" />,
      description: "About",
      link: "/about",
    },
    {
      id: 3,
      name: <CiBank className="m-auto self-center" />,
      description: "Education",
      link: "/education",
    },
    {
      id: 4,
      name: <CiGrid42 className="m-auto self-center" />,
      description: "Skill",
      link: "/skill",
    },
    {
      id: 5,
      name: <CiMonitor className="m-auto self-center" />,
      description: "Projects",
      link: "/projects",
    },
    {
      id: 6,
      name: <CiPhone className="m-auto self-center" />,
      description: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="w-full m-auto flex justify-center select-none ">
      <div
        className={`bg-midblue dark:bg-gray backdrop backdrop-blur-md dark:bg-opacity-20 bg-opacity-20 w-full h-[10vh] rounded-b-xl md:hidden fixed  z-40`}
      ></div>
      <div className="fixed top-2 md:hidden z-50 left-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } md:block mt-10 md:mt-3 z-20 md:bg-gradient-to-r from-cayn  to-blue w-[95%] shadow-3xl fixed overflow-hidden  bg-slate pb-2   backdrop-filter   backdrop-blur-md bg-opacity-80   rounded-lg shadow-2xl  md:w-[60%] `}
      >
        <div className="flex md:flex-row md:-end flex-col  gap-4 m-auto justify-around md:py-0 pt-8">
          {items.map((item) => (
            <NavLink
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
              className={({
                isActive,
              }) => `group w-full  md:w-[4em] h-[3em] m-1   self-center hover:text-slate   md:rounded-b-xl   text-white text-xl  flex flex-col justify-center items-center cursor-pointer
            ${
              isActive
                ? "md:text-slate  md:bg-white md:bg-opacity-80  md:shadow-2xl"
                : "md:text-white md:translate-y-2"
            }
              }`}
            >
              {item.name}
              <span
                className={`${
                  isActive == item.id
                    ? "md:visible md:text-slate"
                    : "md:invisible md:text-white md:-translate-y-4"
                } text-sm  text-center text-white `}
              >
                {item.description}
              </span>
            </NavLink>
          ))}

          <span className={`flex justify-center md:hidden cursor-pointer `}>
            <CiCircleChevUp
              className="text-white text-[2em]  "
              onClick={(prev) => setOpen(!prev)}
            />
          </span>
        </div>
        <div className="w-full h-1 bg-white bg-opacity-80  absolute inset-0 rounded-t-2xl"></div>
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
