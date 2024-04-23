import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Welcome from "./components/Welcome.jsx";
import Resume from "./components/Resume.jsx";
import Skill from "./components/Skill.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "projects",
        element: <Projects />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
