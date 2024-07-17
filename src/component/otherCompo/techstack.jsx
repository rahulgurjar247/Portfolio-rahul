import python from "../../assets/python.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import vscode from "../../assets/vscode.svg";
import node from "../../assets/node.svg";
import mysql from "../../assets/mysql.svg";
import express from "../../assets/express.svg";


const Techstack = () => {
    return (
      <>
        <div className="techstack">
          <h1>Tech Stack</h1>
          <div className="imagestech">
            <img src={react} alt="" />
            <img src={javascript} alt="" />
            <img src={python} alt="" />
            <img src={node} alt="" />
            <img src={tailwindcss} alt="" />
            <img src={mysql} alt="" />
            <img src={vscode} alt="" />
            <img src={express} alt="" />
          </div>
        </div>
      </>
    );
}

export default Techstack;