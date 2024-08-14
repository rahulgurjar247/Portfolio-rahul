import "../navigationbar/navbar.css";
import { NavLink } from "react-router-dom";
import icon from "../../assets/developer.png";
const Navbar = () => {
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
    </>
  );
};
export default Navbar;
