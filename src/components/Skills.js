import "../App.css";
import React from "react";

export default function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Node.js"];

  return (
    <div className="skills-section">
      <div className="column">
        <h2 data-aos="fade-up">Skills</h2>
        <ul className="skills-list" data-aos="fade-up">
          {skills.map((skill, index) => (
            <li className="skill-item" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2 data-aos="fade-up">Passion</h2>
        <p data-aos="fade-up">
          I get tremendous satisfaction and excitement when I incorporate design
          into my daily life. Even the most commonplace things have an aesthetic
          appeal to me, especially when they serve a useful purpose. My focus is
          still on continuously honing and exceeding my own goals as I look to
          the future. My enthusiasm and ambition are fueled by each success,
          which drives me to pursue greater success.
        </p>
      </div>
    </div>
  );
}
