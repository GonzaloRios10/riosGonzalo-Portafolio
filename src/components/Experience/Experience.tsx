import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.experienceList}>
        {history.map((job, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.left}>
              {job.logo && (
                <a href={job.url} target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                  <img src={job.logo} alt={job.company} className={styles.logo} />
                </a>
              )}
              <p className={styles.period}>{job.period}</p>
            </div>
            <div className={styles.details}>
              <h3 className={styles.role}>
                {job.role} <span className={styles.company}> | {job.company}</span>
              </h3>
              <p className={styles.description}>{job.description}</p>
              <div className={styles.techGroup}>
                {job.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
