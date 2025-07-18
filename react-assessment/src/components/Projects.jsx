import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects} id="About">
      <h2>My Projects</h2>
      <ul>
        <li>📱 Portfolio Website</li>
        <li>🛒 E-commerce Frontend</li>
        <li>📊 Dashboard with Charts</li>
      </ul>
    </section>
  );
}

export default Projects;
