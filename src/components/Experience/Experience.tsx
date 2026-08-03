import styles from "./Experience.module.css";
import history from "../../data/history.json";
import reveal from "../../styles/reveal.module.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export const Experience = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="experience"
      className={`${styles.container} ${isVisible ? reveal.show : reveal.hidden}`}
    >
      <p className={styles.label}>Trayectoria</p>
      <h2 className={styles.title}>Experiencia</h2>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />

        {history.map((job, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.node}>
              {job.logo ? (
                <img src={job.logo} alt={job.company} className={styles.nodeLogo} />
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              )}
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.company}
                    >
                      {job.company} ↗
                    </a>
                  ) : (
                    <span className={styles.companyStatic}>{job.company}</span>
                  )}
                </div>
                <span className={styles.periodBadge}>{job.period}</span>
              </div>

              <p className={styles.description}>{job.description}</p>

              {job.technologies.length > 0 && (
                <div className={styles.techGroup}>
                  {job.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};