import python from "../../assets/python.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import vscode from "../../assets/vscode.svg";
import node from "../../assets/node.svg";
import mysql from "../../assets/mysql.svg";
import express from "../../assets/express.svg";
import fastapi from "../../assets/fastapi.svg";
import MonGoDB from "../../assets/MongoDB.svg";
import postgres from "../../assets/postgres.svg";
import Postman from "../../assets/Postman.svg";

const Techstack = () => {
  return (
    <>
      <div className="techstack">
        <h1>My Skill</h1>
        <div className="imagestech">
          <img
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            alt="Typescript"
          />
          <img src={javascript} alt="" />
          <img src={python} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={tailwindcss} alt="" />
          <img src={mysql} alt="" />
          <img src={express} alt="" />
          <img src={vscode} alt="" />
          <img src={MonGoDB} alt="" />
          {/* <img src={postgres} alt="" /> */}
          <img
            src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
            alt="AWS"
          />
          <img src={Postman} alt="" />
        </div>
      </div>
    </>
  );
};

export default Techstack;