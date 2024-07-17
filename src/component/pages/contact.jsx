import Social from "../otherCompo/socialmedia/social";

function Contact() {
  return (
    <div className="rightside contact">
      <div className="Topform"></div>
      <div className="downform">
        <h1>Let's Get In Touch</h1>
        <input type="text" placeholder="Enter your name hear" />
        <input type="number" placeholder="Enter mobile number" r />
        <textarea name="textarea" id="" placeholder="Message hear"></textarea>
        <button> Submit </button>
        <div className="social-media">
        <Social />
        </div>
      </div>
    </div>
  );
}
export default Contact;
