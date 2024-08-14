import ProjectCard from "../otherCompo/projectcard/projectBox";

function Project() {
  const Allproject = [
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
      url: "rahulgurjar247247@netlify.app",
    },
    {
      name: "Easy bank landing page",
      about:
        "This is a landing page for Easy bank , this is a complete responsive landing page   ",
      tech: "Html, css, javascript",
      url: "rahulgurjar-easybank.netlify.app",
    },
  ];
  
  return (
    <div className="rightside project">
      <h1>List of Project</h1>
      {Allproject.map((proj) => {
        return (
          
          <ProjectCard heading={proj.name} about={ proj.about} tech={proj.tech} url={proj.url} key={proj.name} />          
        )
      })}
    </div>
  );
}
export default Project;
