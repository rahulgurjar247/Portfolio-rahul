import "../navigationbar/navbar.css";
import { NavLink } from "react-router-dom";
import icon from "../../assets/developer.png";
import hamburger from "../../assets/white-hamburger.svg";
import crossSign from "../../assets/white-cross.png";
import { useRef } from "react";

const Navbar = () => {
  const navInMobile = useRef();
  const hamburgerBar = useRef();
  function handleNav(e) {
    e.preventDefault();
    if (navInMobile.current.id == "hamburger") {
      // alert(hamburgerBar.current);
      navInMobile.current.src = crossSign;
      hamburgerBar.current.style.display = "block";
      hamburgerBar.current.style.right = "0px";

      navInMobile.current.id = "crossbar";
    } else {
      navInMobile.current.src = hamburger;
      hamburgerBar.current.style.right = "-200px";
      hamburgerBar.current.style.display = "none";
      navInMobile.current.id = "hamburger";
    }
  }

  const removeNavbar = () => {
    hamburgerBar.current.style.right = "-200px";
    hamburgerBar.current.style.display = "none";
    navInMobile.current.src = hamburger;
    navInMobile.current.id = "hamburger";
  };

  document.addEventListener("scroll", removeNavbar);

  return (
    <>
      <nav>
        <div className="navImg">
          <img src={icon} alt="devloper rahul" />
          <h4>Rahul gurjar</h4>
        </div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skill">Skill</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="achievement">Achievement</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="hamburger">
        <img
          src={hamburger}
          ref={navInMobile}
          onClick={handleNav}
          id="hamburger"
        />
      </div>
      <div className="hamburgerBar" ref={hamburgerBar}>
        <ul onClick={removeNavbar}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skill">Skill</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="achievement">Achievement</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
