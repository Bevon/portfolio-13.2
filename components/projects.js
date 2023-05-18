import styles from "@/styles/Home.module.css";
import ProjectLogo from "../public/api.jpg";
import AnotherLogo from "../public/holder.jpg";
import Image from "next/image";

export default function Projects() {
  return (
    <div className={styles.main} id="portfolio">
      <h2>My Creative Portfolio</h2>
      <h5>These are some of the project I have built with my skills</h5>
      <div className={styles.projects}>
        <div className={styles.projectCard}>
          <div className={styles.imageCard}>
            <Image
              src={ProjectLogo}
              alt="Project Image"
              height={128}
              style={{ backgroundSize: "cover" }}
            />
          </div>
          <h5>E-Commerce Web App</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content
          </p>
          <a href="/" target="_blank">
            View Project
          </a>
          <div className={styles.techCardContainer}>
            <div className={styles.techCard}>Python</div>
            <div className={styles.techCard}>Django</div>
            <div className={styles.techCard}>React</div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCard}>
            <Image
              src={AnotherLogo}
              alt="Project Image"
              height={128}
              style={{ backgroundSize: "cover" }}
            />
          </div>
          <h5>Random Quote Machine</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content
          </p>
          <a href="/" target="_blank">
            View Project
          </a>
          <div className={styles.techCardContainer}>
            <div className={styles.techCard}>React</div>
            <div className={styles.techCard}>Node.js</div>
            <div className={styles.techCard}>Express</div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCard}>
            <Image
              src={ProjectLogo}
              alt="Project Image"
              height={128}
              style={{ backgroundSize: "cover" }}
            />
          </div>
          <h5>Car Hire Service App</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content
          </p>
          <a href="/">View Project</a>
          <div className={styles.techCardContainer}>
            <div className={styles.techCard}>React</div>
            <div className={styles.techCard}>Node.js</div>
            <div className={styles.techCard}>Express</div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCard}>
            <Image
              src={ProjectLogo}
              alt="Project Image"
              height={128}
              style={{ backgroundSize: "cover" }}
            />
          </div>
          <h5>Tech Blog Website</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content
          </p>
          <a href="#" target="_blank">
            View Project
          </a>
          <div className={styles.techCardContainer}>
            <div className={styles.techCard}>NextJS</div>
            <div className={styles.techCard}>Node.js</div>
            <div className={styles.techCard}>Tailwind</div>
          </div>
        </div>
      </div>
    </div>
  );
}
