import icon from "../../assets/developer.png"
  
const add = {
  address: icon
}
function Home() {
  return (
    <div className="rightside ">
      <div className="Home">
        <div className="left">
          <h2>Hi there,</h2>
          <h1>
            My name is <span>Rahul gurjar</span> <br />I am a Full-Stack
            Developer
          </h1>
          <div>
            <button id="getInTouch"> Get In Touch</button>
            <button id="ResumeDownload">
              <a href="">Download resume</a>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={add.address} className="devloper" alt="devloper rahul" />
        </div>
      </div>
    </div>
  );
}
export default Home;
