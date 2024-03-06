import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Welcome from "./components/Welcome.jsx";
import Head from "./components/Head.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Projects.jsx";
import "./App.css";

import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";

function App() {
  return (
    <>
      <Head />

      <Welcome />

      <About />
      <Education />
      <Skill />
      <Project />

      <Contact />
    </>
  );
}

export default App;
