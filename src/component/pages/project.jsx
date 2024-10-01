import ProjectCard from "../otherCompo/projectcard/projectBox";
import leftside from "../../assets/leftSide.png";

function Project() {
  const Allproject = [
    {
      name: "Comrade",
      about: "Comrade is a social media app inspired by twitter",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, JWT , BCRYPT",
      url: "https://github.com/rahulgurjar247/Comrade",
      status: `On Progress...👈`,
    },
    {
      name: "Course selling Site",
      about:
        "A website where user can signIn/signUp and view course card and have ability to purchase these course  ",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, JWT ",
      url: "https://github.com/rahulgurjar247/Course-Selling-Website-Mern",
      status: "On Progress...👈",
    },
    {
      name: "Password manager",
      about:
        "Paaword manager can help you to save your password in your browser in a secure way",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, JWT ",
      url: "https://github.com/rahulgurjar247/Password-Manager",
      status: "On Progress...👈",
    },
    {
      name: "Random number && Rock paper scissor",
      about:
        "This is a simple project which i made using C language in My first sem in this game you can play random rumber game or rock paper scissior ",
      tech: "C language",
      url: "https://github.com/rahulgurjar247/Project-for-semester/tree/devloper_rahul/First%20sem",
    },
    {
      name: "Fylo landing page",
      about:
        "Fylo is a  langing page for a company  i made this pade complete responsive for mobile devics",
      tech: "Html,css, javascript",
      url: "https://rahulgurjar247247.netlify.app",
    },
    {
      name: "Easy bank landing page",
      about:
        "This is a landing page for Easy bank , this is a complete responsive landing page   ",
      tech: "Html, css, javascript",
      url: "https://rahulgurjar-easybank.netlify.app",
    },
  ];

  return (
    <div className="rightside project " id="project">
      <h1>List of Project</h1>
      {Allproject.map((proj) => {
        return (
          <ProjectCard
            heading={proj.name}
            about={proj.about}
            tech={proj.tech}
            url={proj.url}
            key={proj.name}
            status={proj.status}
          />
        );
      })}
    </div>
  );
}
export default Project;
