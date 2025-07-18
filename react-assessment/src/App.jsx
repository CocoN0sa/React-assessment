import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
