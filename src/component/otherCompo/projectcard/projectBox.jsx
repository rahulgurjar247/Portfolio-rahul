import "./projectcard.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger,Draggable,Flip)

const ProjectCard = ({heading , about,tech,url="#"}) => {
  return (
    <>
      <div className="card">
        <h1>{heading}</h1>
        <p>{about}</p>
        <p>
          Technologies Used : <span id="technology
          "> {tech}</span>
        </p>
        <li>
          <a href={url}>Check out project... </a>
        </li>
      </div>
    </>
  );
};
export default ProjectCard;
