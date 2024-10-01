import React from "react";
import Navbar from "./component/navigationbar/navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/about";
import Project from "./component/pages/project";
import Contact from "./component/pages/contact";
import Achievment from "./component/pages/achievement";

const MobileView = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default MobileView;