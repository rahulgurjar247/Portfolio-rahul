import Navbar from "./component/navigationbar/navbar";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import { useIsMobile } from "./component/hooks/isMobileHook";
import Home from "./component/pages/Home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Project from "./component/pages/project";
import Skill from "./component/pages/skill";
import MobileView from "./Mobile";
import Achievement from "./component/pages/achievement";
import Footer from "./component/pages/Footer";

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
