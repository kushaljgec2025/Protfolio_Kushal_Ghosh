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
function Head() {
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
    <div className="w-full m-auto flex justify-center">
      <div className=" hidden lg:block mt-2 fixed z-10 lg:bg-gradient-to-r from-cayn to-blue w-[95%] bg-midblue  p-3 pb-2  m-2 backdrop-filter   backdrop-blur-sm bg-opacity-20   rounded-lg shadow-2xl  lg:w-[60%] ">
        <div className="flex lg:flex-row flex-col gap-4 justify-around lg:py-0 py-4">
          {items.map((item) => (
            <a
              key={item.id}
              className="group border-b-[1px]  lg:border-0    translate-y-2 lg:hover:-translate-y-1 transition duration-450 text-white text-xl  flex flex-col justify-center align-center"
            >
              {item.name}
              <span className="text-sm lg:invisible lg:group-hover:visible text-center text-white ">
                {item.description}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="fixed top-4 z-50 right-4">
        {isdark ? (
          <CiSun className="text-[2em]  hover:text-yellow  " />
        ) : (
          <CiCloudMoon className="text-[2em] hover:text-blue " />
        )}
      </div>
    </div>
  );
}

export default Head;
