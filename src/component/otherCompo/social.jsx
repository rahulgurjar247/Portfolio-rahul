import "./social.css"
const Social = () => {
  return (
    <>
      <div className="social">
        <h1>Social Media</h1>
        <div className="image">
          <a href="https://www.linkedin.com/in/rahulgurjar247247">
            <img
              src="https://img.shields.io/badge/LinkedIn-orange?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn Badge"
            />
          </a>
          <a href="https://twitter.com/RahulGurjar_247">
            <img
              src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white"
              alt="Twitter Badge"
            />
          </a>
          <a href="https://leetcode.com/u/Rahul_gurjar_247">
            <img
              src="https://img.shields.io/badge/Leetcode-yello?style=for-the-badge&logo=leetcode&logoColor=white"
              alt="Leet Code"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Social;
