import React from "react";
import Line from "./Line";
import Logo_iitm from "../img/Logo_iitm.png";
import Logo_jgec from "../img/Logo_jgec.png";
import Logo_ahs from "../img/Logo_ahs.png";
import Logo_wbbse from "../img/Logo_wbbse.png";
function Education() {
  const edus_info = [
    {
      degree: "M.Tech",
      stream: "Computer Science and Engineering",
      college: "Indian Institute of Technology Madras",
      year: "2025 - 2027",
      cgpa: "--",
      logo: Logo_iitm,
    },
    {
      degree: "B.Tech",
      stream: "Information Technology",
      college: "Jalpaiguri Government Engineering College",
      year: "2021 - 2025",
      cgpa: "CGPA : 9.18",
      logo: Logo_jgec,
    },
    {
      degree: "Higher Secondary",
      stream: "PCMB",
      college: "Arambagh High School",
      year: "2019 - 2021",
      cgpa: "Percentage : 94.6%",
      logo: Logo_ahs,
    },
    {
      degree: "Secondary",
      stream: "10th",
      college: "Samantakhanda High School",
      year: "2013 - 2019",
      cgpa: "Percentage : 95.4%",
      logo: Logo_wbbse,
    },
  ];
  return (
    <div className="flex justify-center w-full items-center pt-[15vh]">
      <div className="lg:w-[70%] w-[90%]  min-h-screen " data-aos="fade-up">
        <h1 className=" text-2xl   text-center sm:text-left text-midblue">
          EDUCATION
        </h1>
        <div>
          {edus_info.map((edu, index) => {
            return (
              <div
                key={index}
                className={`my-4 flex gap-5 ${
                  index % 2 ? "lg:flex-row-reverse " : "lg:flex-row "
                } m-auto  `}
              >
                <div
                  className={`${
                    index % 2
                      ? "order-2 -translate-x-1"
                      : "order-1 translate-x-1"
                  } w-5 h-5 bg-gradient-to-t hidden  lg:flex from-cayn to-blue rounded-[50%]`}
                >
                  <div className="w-3 h-3 bg-white m-auto  rounded-[50%]"></div>
                </div>

                <div className=" text-white bg-gradient-to-bl  from-cayn to-blue backdrop backdrop-blur-md bg-opacity-80 w-full lg:w-[45%] p-2 rounded-md  ring-gray  hover:shadow-2xl hover:scale-105 transition duration-500 ease-in-out ">
                  <div className="flex justify-between m-2 items-center">
                    <div className="">
                      <h1 className="text-xl  m-auto text-left font-bold">
                        {edu.degree}
                      </h1>
                      <p className="text-left m-auto">{edu.college}</p>
                    </div>
                    <div className="p-1 bg-white rounded-xl">
                      <img className="w-16  " src={edu.logo} alt="" />
                    </div>
                  </div>
                  <Line />
                  <div className="flex justify-between content-center my-2">
                    <p className="text-left font-bold ">{edu.stream}</p>

                    <p className="text-right basis-1/3">{edu.year}</p>
                  </div>

                  {edu.cgpa && (
                    <div className=" py-2 flex justify-center gap-2  bg-white text-blue rounded-sm shadow-md">
                      <span className="text-xl">🎖️</span>
                      <p className="text-center font-bold ">{edu.cgpa}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
