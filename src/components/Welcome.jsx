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
          className="lg:w-[70%] w-[90%]  mt-[15vh]  lg:mt-[5vh]   flex flex-col  justify-between  "
          data-aos="fade-up"
        >
          <div className="  flex  lg:flex-row flex-col justify-center gap-2  ">
            <div className=" flex justify-center  lg:w-[25em] m-auto rounded-[50%] border-5 border-gray   ">
              <img className=" z-1  m-auto" src={user_img} alt="user_img" />
            </div>

            <div className=" basis-1/2 flex justify-center flex-col  gap-5 ">
              <h2>HEY , I AM</h2>
              <h5 className="text-6xl text-midblue">Kushal Ghosh</h5>
              <p className="pt-4">
                A passionate full-stack developer and a competitive programmer
                with a keen interest in web development and problem-solving.
              </p>
              <div className="w-auto ">
                <div className="w-max">
                  <h1 className="animate-typing leading-tight overflow-hidden   whitespace-nowrap border-r-4 border-r-gray pr-5 text-5xl text-white dark:text-slate  font-bold">
                    kg_codex
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
