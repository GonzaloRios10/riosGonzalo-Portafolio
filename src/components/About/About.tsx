import styles from "./About.module.css";
import reveal from "../../styles/reveal.module.css";
import { getImageUrl } from "../../utils";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export const About = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section ref={ref} id="about" className={`${styles.container} ${isVisible ? reveal.show : reveal.hidden}`}>
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/erasebg-transformed.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cerebro.png")} alt="Cursor icon" className={styles.itemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Téc. Analista de Sistemas</h3>
              <p>
                Abordo los proyectos desde una perspectiva analítica, comprendiendo requerimientos, flujos y reglas de negocio para diseñar soluciones claras, sostenibles y alineadas a las necesidades del cliente.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/desarrollador.png")} alt="Server icon" className={styles.itemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Full Stack</h3>
              <p>
                Desarrollo aplicaciones web a medida y escalables, integrando interfaces modernas con lógica de negocio, APIs y bases de datos, priorizando buenas prácticas y calidad de código.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bulbo.png")} alt="UI icon" className={styles.itemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Metodologías Ágiles</h3>
              <p>
                Trabajo en entornos ágiles colaborando con distintos roles, participando activamente en ceremonias <strong>Scrum</strong> y adaptándome a los cambios y necesidades de cada proyecto.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};