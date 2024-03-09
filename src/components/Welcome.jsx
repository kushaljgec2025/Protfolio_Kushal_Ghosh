import React from "react";
import user_img from "../img/user_img.png";
import Line from "./Line";

function Welcome() {
  return (
    <>
      <div
        id="Welcome"
        className="flex justify-center w-full items-center lg:pt-[15vh]"
      >
        <div
          className="lg:w-[70%] w-[90%]  mt-[15vh]  lg:mt-[5vh]   flex flex-col items-stretch justify-between  "
          data-aos="fade-up"
        >
          <div className=" p-2 flex  lg:flex-row flex-col gap-2  ">
            <div className=" m-auto   h-[20em]">
              <div className=" lg:-translate-y-5 w-[12em] h-[12em] m-auto rounded-[50%] bg-gradient-to-t from-cayn to-blue ring-8 hover:ring-white ">
                <img className=" z-1" src={user_img} alt="user_img" />
                <div className="w-[12em]  h-2 rounded-b-md bg-gradient-to-t from-cayn to-blue"></div>
              </div>
            </div>
            <div className=" basis-1/2 flex justify-center flex-col  gap-5 ">
              <h2>HEY , I AM</h2>
              <h5 className="text-6xl text-midblue">Kushal Ghosh</h5>
              <p className="pt-4">
                A passionate full-stack developer and a competitive programmer
                with a keen interest in web development and problem-solving.
              </p>
              <div className="w-auto ">
                <h1 className="animate-typing leading-tight overflow-hidden   whitespace-nowrap border-r-4 border-r-gray pr-5 text-5xl text-white dark:text-slate  font-bold">
                  kg_codex
                </h1>
              </div>
            </div>
          </div>
          <Line />
        </div>
      </div>
    </>
  );
}

export default Welcome;
