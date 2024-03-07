import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import Welcome from "./components/Welcome.jsx";
import Head from "./components/Head.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Projects.jsx";
import "./App.css";

import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setDarkMode] = useState(true);
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

  return (
    <>
      <div className="container flex flex-col justify-center items-center dark:bg-white dark:text-slate ">
        <Head />

        <Welcome />

        <About />
        <Education />
        <Skill />
        <Project />

        <Contact />
      </div>
    </>
  );
}

export default App;
