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
import { Link } from "react-scroll";
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
    },
    {
      id: 2,
      name: <CiUser className="m-auto self-center" />,
      description: "About",
    },

    {
      id: 3,
      name: <CiGrid42 className="m-auto self-center" />,
      description: "Skill",
    },
    {
      id: 4,
      name: <CiMonitor className="m-auto self-center" />,
      description: "Projects",
    },
    {
      id: 5,
      name: <CiPhone className="m-auto self-center" />,
      description: "Contact",
    },
  ];

  return (
    <div className="w-full m-auto flex justify-center select-none ">
      <div
        className={`bg-midblue dark:bg-gray backdrop backdrop-blur-md dark:bg-opacity-20 bg-opacity-20 w-full h-[10vh] rounded-b-xl lg:hidden fixed  z-40`}
      ></div>
      <div className="fixed top-2 lg:hidden z-50 left-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } lg:block mt-8 lg:mt-3 z-20 lg:bg-gradient-to-r from-cayn fixed overflow-hidden  to-blue w-[95%] shadow-3xl bg-midblue pb-2   backdrop-filter   backdrop-blur-md bg-opacity-40   rounded-lg shadow-2xl  lg:w-[60%] `}
      >
        <div className="flex lg:flex-row lg:-end flex-col  gap-4 m-auto justify-around lg:py-0 pt-8">
          {items.map((item) => (
            <Link
              activeClass="active"
              to={`${item.description}`}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
              className={`group w-full  lg:w-[4em] h-[3em] m-1   self-center hover:text-slate   lg:rounded-b-xl   text-white text-xl  flex flex-col justify-center items-center cursor-pointer
            ${
              isActive == item.id
                ? "lg:text-slate  lg:bg-white lg:bg-opacity-80  lg:shadow-2xl"
                : "lg:text-white lg:translate-y-2"
            }
              }`}
            >
              {item.name}
              <span
                className={`${
                  isActive == item.id
                    ? "lg:visible lg:text-slate"
                    : "lg:invisible lg:text-white lg:-translate-y-4"
                } text-sm  text-center text-white `}
              >
                {item.description}
              </span>
            </Link>
          ))}

          <span className={`flex justify-center lg:hidden cursor-pointer `}>
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
