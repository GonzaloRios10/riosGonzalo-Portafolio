import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services"; 
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { GridGlow } from "./components/GridGlow/GridGlow";

function App() {
  return (
    <div className={styles.App}>
      <GridGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;