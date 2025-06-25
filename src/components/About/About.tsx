import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cerebro.png")} alt="Cursor icon" className={styles.itemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Analista de Sistemas</h3>
              <p>
                Soy Técnico Analista de Sistemas de Computación con experiencia en análisis,
                diseño y desarrollo de sistemas y sitios web funcionales.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/desarrollador.png")} alt="Server icon" className={styles.itemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador FullStack</h3>
              <p>
                Cuento con experiencia desarrollando tanto <strong>front-end</strong> como <strong>back-end</strong>, incluyendo integración de APIs, rendimiento, escalabilidad y, sobre todo, buenas prácticas.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bulbo.png")} alt="UI icon" className={styles.itemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Metodologías Ágiles</h3>
              <p>
                Trabajo habitualmente con enfoques ágiles como <strong>Scrum</strong>, priorizando colaboración,
                iteración y mejora continua en los proyectos.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};