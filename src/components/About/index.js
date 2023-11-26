import React from "react";
import "./index.css";
import { FaCode, FaPalette } from "react-icons/fa6";

const About = () => {
  const whatIDo = [
    {
      id: 1,
      title: "Web Development",
      icon: <FaCode size={30} className="icon" />,
      desc: "I'm a front-end developer with a passion for creating visually appealing and user-friendly websites. I have a solid understanding of HTML,CSS,JavaScript and responsive web design principles. To improve code quality and for productivity during development, I use React, JavaScript, TypeScript, Tailwind, and preprocessors like SASS. I strive to deliver high-quality code and work effectively with cross-functional teams to achieve project goals.",
    },
    {
      id: 2,
      title: "UI/UX",
      icon: <FaPalette size={30} className="icon" />,
      desc: "In addition to my interest in development, I have a keen interest in user interface design. I believe that possessing design skills will greatly enhance my understanding of the fundamental logic behind User Interfaces and further improve my development process. I have acquired sufficient proficiency to design a website from its initial ideation stage all the way through the process of sketching, creating Sitemaps, Wireframing, Prototyping, and more. All of these tasks are efficiently accomplished using the design tool, Figma.",
    },
  ];
  return (
    <section className="about-section">
      <h2 className="about-title">What I Do</h2>
      <div className="about-division">
        {whatIDo.map((child, index) => (
          <section key={child.id} className="about-card">
            <div className="header">
              {child.icon}
              <h3 className="header-text">{child.title}</h3>
            </div>
            <p className="text-base mt-2 text-white-400">{child.desc}</p>
          </section>
        ))}
      </div>
    </section>
  );
};

export default About;
