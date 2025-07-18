import React from "react";
import styles from "./Header.module.css";
import myPic from "../assets/myPic.jpg";

function Header() {
  return (
    <div className={styles.container} id="Home">
      <header className={styles.header}>
        <h1>My Portfolio</h1>
        <nav className={styles.navbar}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>
      <div className={styles.hero}>
        <div className={styles.image}>
          <img src={myPic} alt="Blessing" />
        </div>
        <div className={styles.heroText}>
          <h1>Blessing Nosariere Imafidon</h1>
          <p>Frontend Developer | Tech Enthusiast</p>
        </div>
      </div>
    </div>
  );
}
          

export default Header;
