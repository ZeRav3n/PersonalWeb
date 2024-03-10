import "../App.css";
import Zaman_badgeF22 from "../assets/Shahid Md Ratin Zaman_badgeF22.jpg";
import Zaman_badgeW23 from "../assets/Shahid Md Ratin Zaman_badgeW23.jpg";
import Zaman_badgeF23 from "../assets/Shahid Md Ratin Zaman_badgeF23.jpg";
import Zaman_badgeF21 from "../assets/Shahid Md Ratin Zaman_badgeF21.pdf";
import Zaman_badgeW22 from "../assets/Shahid Md Ratin Zaman_badgeW22.pdf";
import Resume from "./Resume.js";
export default function Honors() {
  const honorsDescription =
    "Awarded to students who have achieved a GPA of 3.5 or higher for the semester.";
  const deanListEntries = [
    { date: "Fall 2021", imgSrc: Zaman_badgeF21 },
    { date: "Winter 2022", imgSrc: Zaman_badgeW22 },
    { date: "Fall 2022", imgSrc: Zaman_badgeF22 },
    { date: "Winter 2023", imgSrc: Zaman_badgeW23 },
    { date: "Fall 2023", imgSrc: Zaman_badgeF23 },
  ];

  return (
    <div className="honors-section">
      <h2 data-aos="fade-right">Honors & Awards</h2>
      <div className="honors-grid">
        <ul>
          <li>
            <h3 className="honor-title">Dean's List</h3>
            <p className="honor-description">{honorsDescription}</p>
            <div className="gridHonor">
            {deanListEntries.map((entry, index) => (
              <div className="honor-card" key={index} data-aos="fade-right">
                <p className="honor-date">{entry.date}</p>
                <a
                  href={entry.imgSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  <span>View Certificate</span>
                </a>
                
              </div>
            ))}
            </div>
          </li>
        </ul>
        <div className="resume-container" data-aos="fade-up">
          <Resume />
        </div>
      </div>
    </div>
  );
}
