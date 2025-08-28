import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
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
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript / TypeScript</li>
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
            <li>PHP / Laravel</li>
            <li>C# / ASP.NET Core</li>
            <li>C++</li>
            <li>Java / Spring Boot</li>
            <li>Python</li>
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
            <li>SQL</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
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
            <li>Jira</li>
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>Postman</li>
            <li>Looker Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
