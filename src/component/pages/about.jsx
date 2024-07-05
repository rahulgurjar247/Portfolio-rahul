import Techstack from "../otherCompo/techstack";
// }
function About() {
  return (
    <div className="rightside">
      <div className="about">
        <div className="info">
          <h1>About</h1>
          <p>
            Hello , My name is rahul gurajr. I am a Passinate software devloper{" "}
            <br />
            from Rajasthan/india , Currently I am working on my Frontend Skill
          </p>
          <p>
            I love working on a variety of technologies Like Web Development
            Data structure and algorithms. <br /> I like to make real world
            project .
          </p>
        </div>
        <Techstack />
      </div>
    </div>
  );
}
export default About;
