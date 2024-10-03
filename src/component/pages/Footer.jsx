import React from "react";
import loveImage from "../../assets/love.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImage">
        Made By{" "}
        <span>
          <img src={loveImage} alt="" />
        </span>
      </div>
      <div>Rahul Gurjar</div>
    </div>
  );
};

export default Footer;
