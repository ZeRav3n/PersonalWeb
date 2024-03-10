import "../App.css";
import Zaman_badgeF22 from "../assets/Shahid Md Ratin Zaman_badgeF22.jpg";
import Zaman_badgeW23 from "../assets/Shahid Md Ratin Zaman_badgeW23.jpg";
import Zaman_badgeF23 from "../assets/Shahid Md Ratin Zaman_badgeF23.jpg";
import Resume from "./Resume.js";
export default function Honors() {
  const honors = [
    {
      title: "Dean's List",
      date: "Fall 2022",
      description:
        "Awarded to students who have achieved a GPA of 3.5 or higher for the semester.",
      imgSrc: Zaman_badgeF22,
    },
    {
      title: "Dean's List",
      date: "Winter 2023",
      description:
        "Awarded to students who have achieved a GPA of 3.5 or higher for the semester.",
      imgSrc: Zaman_badgeW23,
    },
    {
      title: "Dean's List",
      date: "Fall 2023",
      description:
        "Awarded to students who have achieved a GPA of 3.5 or higher for the semester.",
      imgSrc: Zaman_badgeF23,
    },
  ];
  return (
    <div className="honors-section">
      <h2 data-aos="fade-right">Honors & Awards</h2>
      <div className="honors-grid">
        {honors.map((honor, index) => (
          <div className="honor-card" key={index} data-aos="fade-right">
            <h3 className="honor-title">{honor.title}</h3>
            <p className="honor-description">{honor.description}</p>
            <p className="honor-date">{honor.date}</p>
            <a
              href={honor.imgSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              <span>
              View Certificate
              </span>
            </a>
          </div>
        ))}
        <div className="resume-container" data-aos="fade-up">
      <Resume />
    </div>
      </div>
    </div>
  );
}
