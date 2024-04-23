import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useRef } from "react";
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
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import Lowernav from "./components/Lowernav.jsx";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      {" "}
      <Head />
      <Layout className="w-full">
        <Outlet />
      </Layout>
      <Footer />
      <Lowernav />
    </div>
  );
}

export default App;
