import Social from "../otherCompo/socialmedia/social";
import Techstack from "../otherCompo/techstack";
// }
function About() {
  return (
    <div className="rightside " id="about">
      <div className="about">
        <div className="info">
          <h1>About</h1>
          <p>
            Hello , My name is rahul gurjar. I am a Passinate software devloper{" "}
            <br />
            from Rajasthan/india, Currently I am Bulding a Mernstack project.
          </p>
          <p>
            I love bulding a responsive webApp and solving Complex problem.I
            like to make real world project and working with Team.
          </p>
        </div>
        <Techstack />
        <div className="socialmedia">
          <h1>Social media</h1>
          <Social />
        </div>
      </div>
    </div>
  );
}
export default About;
