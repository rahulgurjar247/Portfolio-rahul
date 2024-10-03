import ProjectCard from "../otherCompo/projectcard/projectBox";
import leftside from "../../assets/leftSide.png";
import comrade from "../../assets/comrade.png";
import courseSelling from "../../assets/courseSelling.png";
import password from "../../assets/password.png";
import fylo from "../../assets/fylo.png";
import EassyBank from "../../assets/EassyBank.png";

function Project() {
  const Allproject = [
    {
      name: "Comrade",
      about:
        "Comrade is a social media app inspired by twitter. Where User can share Tweet Like, Comment, ReTweet the post",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, JWT , BCRYPT",
      url: "https://github.com/rahulgurjar247/Comrade",
      status: `On Progress...👈`,
      backgroundImage: comrade,
    },
    {
      name: "Course selling Site",
      about:
        "A website where user can signIn/signUp and view course card and have ability to purchase these course  ",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, JWT ",
      url: "https://github.com/rahulgurjar247/Course-Selling-Website-Mern",
      status: "On Progress...👈",
      backgroundImage: courseSelling,
    },
    {
      name: "Password manager",
      about:
        "Password manager can help you to save your password in your browser in a secure way",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, JWT ",
      url: "https://github.com/rahulgurjar247/Password-Manager",
      backgroundImage: password,
    },
    {
      name: "Fylo landing page",
      about:
        "Fylo is a  langing page for a company  i made this page complete responsive for mobile devics",
      tech: "Html,css, javascript , MediaQuery",
      url: "https://rahulgurjar247247.netlify.app",
      backgroundImage: fylo,
    },
    {
      name: "Easy bank landing page",
      about:
        "This is a landing page for Easy bank , this is a complete responsive landing page   ",
      tech: "Html, css, javascript",
      url: "https://rahulgurjar-easybank.netlify.app",
      backgroundImage: EassyBank,
    },
  ];

  return (
    <div className="rightside project " id="project">
      <h1>List of Project</h1>
      <div className="projectList">
        {Allproject.map((proj) => {
          return (
            <ProjectCard
              heading={proj.name}
              about={proj.about}
              tech={proj.tech}
              url={proj.url}
              key={proj.name}
              status={proj.status}
              ProjectImage={proj.backgroundImage}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Project;
