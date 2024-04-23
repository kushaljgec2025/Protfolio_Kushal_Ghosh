import React from "react";
import { Link, NavLink } from "react-router-dom";
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
function Lowernav() {
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
      name: <CiGrid42 className="m-auto self-center" />,
      description: "Skill",
      link: "/skill",
    },
    {
      id: 4,
      name: <CiMonitor className="m-auto self-center" />,
      description: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      name: <CiPhone className="m-auto self-center" />,
      description: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-white p-2 fixed z-20 bottom-4 backdrop ring-1 shadow-lg ring-gray  w-[90%] backdrop-blur-md bg-opacity-50 sm:hidden rounded-full flex justify-around gap-4">
      {items.map((item) => (
        <NavLink
          to={item.link}
          key={item.id}
          href={item.link}
          className={({ isActive }) =>
            `p-1 rounded-full shadow-xl ${
              isActive
                ? "bg-midblue text-slate dark:text-white"
                : "bg-slate dark:bg-white text-white  dark:text-slate  "
            }`
          }
        >
          <p className="text-2xl p-2"> {item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Lowernav;
