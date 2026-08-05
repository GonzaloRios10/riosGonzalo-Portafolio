import styles from "./Skills.module.css";
import reveal from "../../styles/reveal.module.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const skillsData = [
  {
    title: "Frontend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["TypeScript", "React", "Angular", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: [".NET / ASP.NET Core", "ASP.NET MVC", "Laravel", "Node.js", "NestJS", "C#", "PHP"],
  },
  {
    title: "Bases de Datos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    items: ["MySQL", "PostgreSQL", "SQL Server", "Firebase", "Prisma ORM"],
  },
  {
    title: "Herramientas",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    items: ["Git & GitHub", "Docker", "Figma", "Postman", "Jira", "Render", "n8n"],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section ref={ref} id="skills" className={`${styles.container} ${isVisible ? reveal.show : reveal.hidden}`}>
      <p className={styles.label}>Stack técnico</p>
      <h2 className={styles.title}>Habilidades</h2>

      <div className={styles.cards}>
        {skillsData.map((skill, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={`${styles.dot} ${styles.red}`}></span>
              <span className={`${styles.dot} ${styles.yellow}`}></span>
              <span className={`${styles.dot} ${styles.green}`}></span>
            </div>

            <div className={styles.icon}>{skill.icon}</div>
            <h3>{skill.title}</h3>

            <ul>
              {skill.items.map((item, j) => (
                <li key={j}>
                  <span className={styles.bullet} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};