import Navbar from "./component/navigationbar/navbar";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import { useIsMobile } from "./component/hooks/isMobileHook";
import Home from "./component/pages/Home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Project from "./component/pages/project";
import Skill from "./component/pages/skill";
import MobileView from "./Mobile";

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="project" element={<Project />}></Route>

            <Route path="skill" element={<Skill />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App
