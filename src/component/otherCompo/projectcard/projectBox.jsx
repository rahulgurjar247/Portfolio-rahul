import "./projectcard.css"
import gsap from "gsap";

const ProjectCard = ({
  heading,
  about,
  tech,
  status,
  url = "#",
  ProjectImage = false,
}) => {
  return (
    <>
      <div className="card">
        {ProjectImage ? (
          <div className="projectImage">
            <img src={ProjectImage} className="projectImage" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="project-data">
          <h1>{heading}</h1>
          <p>{about}</p>
          <p>
            Technologies Used :{" "}
            <span
              id="technology
          "
            >
              {" "}
              {tech}
            </span>
          </p>

          {status ? <p>{status}</p> : ""}
          <li>
            <a href={url}>Check out project...👈 </a>
          </li>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
