import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Welcome from "./components/Welcome.jsx";
import Head from "./components/Head.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Projects.jsx";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className="container w-screen min-h-screen px-1 flex flex-col justify-center items-center  dark:bg-info dark:bg-transparent  dark:text-slate ">
        <Head />

        <Welcome />

        <About />

        <Skill />
        <Project />

        <Contact />
      </div>
    </>
  );
}

export default App;
