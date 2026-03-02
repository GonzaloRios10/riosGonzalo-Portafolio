import styles from "./Skills.module.css";
import reveal from "../../styles/reveal.module.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export const Skills = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section ref={ref} id="skills" className={`${styles.container} ${isVisible ? reveal.show : reveal.hidden}`}>
      <h2 className={styles.title}>Habilidades</h2>

      <div className={styles.cards}>
        {/* Frontend */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={`${styles.dot} ${styles.red}`}></span>
            <span className={`${styles.dot} ${styles.yellow}`}></span>
            <span className={`${styles.dot} ${styles.green}`}></span>
          </div>
          <h3>Frontend 🎨</h3>
          <ul>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        {/* Backend */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={`${styles.dot} ${styles.red}`}></span>
            <span className={`${styles.dot} ${styles.yellow}`}></span>
            <span className={`${styles.dot} ${styles.green}`}></span>
          </div>
          <h3>Backend ⚙️</h3>
          <ul>
            <li>.NET</li>
            <li>Laravel</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Bases de datos */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={`${styles.dot} ${styles.red}`}></span>
            <span className={`${styles.dot} ${styles.yellow}`}></span>
            <span className={`${styles.dot} ${styles.green}`}></span>
          </div>
          <h3>Bases de datos 🗄️</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQL Server</li>
          </ul>
        </div>

        {/* Herramientas */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={`${styles.dot} ${styles.red}`}></span>
            <span className={`${styles.dot} ${styles.yellow}`}></span>
            <span className={`${styles.dot} ${styles.green}`}></span>
          </div>
          <h3>Herramientas 🧰</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>Postman</li>
            <li>Jira</li>
            <li>Looker Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
