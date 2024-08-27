import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import About from "./component/pages/about.jsx";
import Home from "./component/pages/Home.jsx";
import Project from "./component/pages/project.jsx";
import Skill from "./component/pages/skill.jsx";
import Achievement from "./component/pages/achievement.jsx";
import Contact from "./component/pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      ,
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/achievement",
        element: <Achievement />,
      },
      {
        path: "*",
        element: (
          <>
            <div style={{ textAlign: "center" }}>sorry bro</div>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
