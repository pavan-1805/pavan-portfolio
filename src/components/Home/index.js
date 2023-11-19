import React from "react";
import DeveloperImage from "../../assets/developer.png";
import { Link } from "react-scroll";
import "./index.css";

const Home = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <span className="hello-text">Hello,</span>
        <span className="name-text">
          I'm <span className="name">Pavan</span>
          <br />
          <span className="name-designation">UI Developer</span>
        </span>
        <p className="desc-text">
          I'm a skilled UI developer specializing in React.js, passionate about
          creating seamless and engaging user interfaces. I bring a blend of
          creativity and technical expertise to every project. Let's build
          user-friendly interfaces that leave a lasting impression! 👨‍💻💡
        </p>
        <span className="hash-tags">#ReactJS #UIDevelopment</span>
        <Link>
          <button className="btn-hire-me">Hire Me</button>
        </Link>
      </div>
      {/* <div className="intro-image"> */}
      <img
        src={DeveloperImage}
        alt="DeveloperImage"
        className="developer-img"
        width="auto"
        height="auto"
      />
      {/* </div> */}
    </section>
  );
};

export default Home;
