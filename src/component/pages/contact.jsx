import { useState } from "react";
import Social from "../otherCompo/socialmedia/social";

function Contact() {
  const access_key = "143dce79-4028-4cfe-b340-b08b488c7f3b";
  const [formData, setformData] = useState({
    name: "",
    mobile: "",
    msg :""
  })

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "143dce79-4028-4cfe-b340-b08b488c7f3b",
      }),
    });
    if (response.ok) {
      alert("message sent successfully")
      setformData({ name: "", mobile: "", msg: "" });
    } else {
      alert("failed to send : ",response.text)
    }
  }

  return (
    <div className="rightside contact">
      <div className="Topform"></div>
      <form className="downform" action="https://api.web3forms.com/143dce79-4028-4cfe-b340-b08b488c7f3b">
        <h1>Let's Get In Touch</h1>
        <input type="hidden" name="access_key" value="143dce79-4028-4cfe-b340-b08b488c7f3b" />
        <input
          type="text"
          placeholder="Enter your name hear"
          required name="name"
          onChange={handlechange}
        />
        <input
          type="number"
          name="mobile"
          placeholder="Enter mobile number"
          required
          onChange={handlechange}
        />
        <textarea
          name="msg"
          id=""
          placeholder="Message hear"
          required
          onChange={handlechange}
        ></textarea>
        <button type="submit" onClick={handleSubmit}> Submit </button>
        <div className="social-media">
        <Social />
        </div>
      </form>
    </div>
  );
}
export default Contact;
