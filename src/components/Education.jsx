import React from "react";
import Line from "./Line";
function Education() {
  const edus_info = [
    {
      degree: "B.Tech",
      stream: "Information Technology",
      college: "Jalpaiguri Government Engineering College",
      year: "2021 - Present",
      cgpa: "9.0",
    },
    {
      degree: "Higher Secondary",
      stream: "PCMB",
      college: "Arambagh High School",
      year: "2019 - 2021",
      cgpa: "94.6%",
    },
    {
      degree: "Secondary",
      stream: "10th",
      college: "Samantakhanda High School",
      year: "2013 - 2019",
      cgpa: "95.4%",
    },
  ];
  return (
    <div className="lg:w-[60%] w-[90%]  mt-[10vh] lg:mt-[5vh] ">
      <h1 className=" text-2xl mb-4 text-center sm:text-left">EDUCATION</h1>
      <div>
        {edus_info.map((edu, index) => {
          return (
            <div
              key={index}
              className={`my-2 flex gap-5 ${
                index % 2 ? "lg:flex-row-reverse " : "lg:flex-row "
              } m-auto  `}
            >
              <div
                className={`${
                  index % 2 ? "order-2 -translate-x-1" : "order-1 translate-x-1"
                } w-5 h-5 bg-gradient-to-t hidden  lg:flex from-cayn to-blue rounded-[50%]`}
              >
                <div className="w-3 h-3 bg-white m-auto  rounded-[50%]"></div>
              </div>

              <div className="bg-gradient-to-bl from-cayn to-blue backdrop backdrop-blur-md bg-opacity-80 w-full lg:w-[45%] p-2 rounded-md  ring-gray hover:ring-2 hover:shadow-2xl transition duration-500 ease-in-out ">
                <h1 className="text-xl  m-auto text-center font-bold">
                  {edu.degree}
                </h1>
                <Line />
                <p className="text-center font-bold m-auto">{edu.stream}</p>
                <p className="text-center m-auto">{edu.college}</p>
                <p className="text-center m-auto">{edu.year}</p>
                <p className="text-center font-bold m-auto">{edu.cgpa}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Line />
    </div>
  );
}

export default Education;
