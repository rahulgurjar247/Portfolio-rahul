import { useRef, useState } from "react";
import Social from "../otherCompo/socialmedia/social";

function Contact() {
  const nameRef = useRef();
  const numRef = useRef();
  const msgRef = useRef();

  const [formData, setformData] = useState({
    name: "",
    mobile: "",
    msg: "",
  });

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.mobile && formData.msg) {
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
         alert("message sent successfully");
         setformData({ name: "", mobile: "", msg: "" });
         nameRef.current.value = "";
         numRef.current.value = "";
         msgRef.current.value = "";
       } else {
         alert("failed to send : ", response.text);
       }
      
    } else {
      alert("fill form first please")
    }
   
  };

  return (
    <div className="rightside contact" id="contact">
      <div className="Topform"></div>
      <form
        className="downform"
        action="https://api.web3forms.com/143dce79-4028-4cfe-b340-b08b488c7f3b"
      >
        <h1>Let's Get In Touch</h1>
        <input
          type="text"
          placeholder="Enter your name hear"
          required
          name="name"
          onChange={handlechange}
          ref={nameRef}
        />
        <input
          type="number"
          name="mobile"
          placeholder="Enter mobile number"
          required
          onChange={handlechange}
          ref={numRef}
        />
        <textarea
          name="msg"
          id=""
          placeholder="Message hear"
          required
          onChange={handlechange}
          ref={msgRef}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
        <div className="social-media">
          <Social />
        </div>
      </form>
    </div>
  );
}
export default Contact;
