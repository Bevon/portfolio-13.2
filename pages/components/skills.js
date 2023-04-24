import styles from "@/styles/Home.module.css";
import MyCanvas from "../main";

export default function Skills() {
  const Competencies = [
    "Javascript",
    "Python",
    "React",
    "NextJS",
    "Linux",
    "MySQL",
    "MongoDB",
    "Agile Methodologies",
    " Node.js",
    "Server Administration",
    "Express",
    "Amazon Web Services (AWS)",
    "Automated Testing (Cypress)",
  ];
  return (
    <div className={styles.side}>
      <h5>Skills & Core Competencies</h5>
      <hr />
      <div className={styles.skills}>
        {Competencies.map(function (skill, id) {
          return (
            <div className={styles.column} key={id}>
              {skill}
            </div>
          );
        })}
      </div>
      <div>
        <MyCanvas />
      </div>
    </div>
  );
}
