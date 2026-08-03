import styles from "./About.module.css";
import reveal from "../../styles/reveal.module.css";
import { getImageUrl } from "../../utils";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export const About = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section ref={ref} id="about" className={`${styles.container} ${isVisible ? reveal.show : reveal.hidden}`}>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <p className={styles.label}>Quién soy</p>
          <h2 className={styles.title}>Sobre mí</h2>
          <p className={styles.introDescription}>
            Desarrollador Full Stack con foco en calidad, escalabilidad y comunicación.
            Construyo puentes entre el análisis técnico y las necesidades reales del negocio.
          </p>
        </div>

        <img
          src={getImageUrl("about/erasebg-transformed.png")}
          alt="Me sitting with a laptop"
          className={styles.introImage}
        />
      </div>

      <ul className={styles.cardsGrid}>
        <li className={styles.card}>
          <img src={getImageUrl("about/cerebro.png")} alt="" className={styles.cardIcon} />
          <p className={styles.cardLabel}>Pensamiento analítico</p>
          <h3 className={styles.cardTitle}>Téc. Analista de Sistemas</h3>
          <p className={styles.cardText}>
            Abordo los proyectos comprendiendo requerimientos, flujos y reglas de negocio
            para diseñar soluciones claras, sostenibles y alineadas a las necesidades del cliente.
          </p>
        </li>

        <li className={styles.card}>
          <img src={getImageUrl("about/desarrollador.png")} alt="" className={styles.cardIcon} />
          <p className={styles.cardLabel}>Soluciones completas</p>
          <h3 className={styles.cardTitle}>Desarrollador Full Stack</h3>
          <p className={styles.cardText}>
            Desarrollo aplicaciones web a medida e interfaces modernas integradas con lógica de
            negocio, APIs y bases de datos, priorizando buenas prácticas y calidad de código.
          </p>
        </li>

        <li className={styles.card}>
          <img src={getImageUrl("about/bulbo.png")} alt="" className={styles.cardIcon} />
          <p className={styles.cardLabel}>Trabajo en equipo</p>
          <h3 className={styles.cardTitle}>Metodologías Ágiles</h3>
          <p className={styles.cardText}>
            Trabajo en entornos ágiles colaborando con distintos roles, participando activamente
            en ceremonias y adaptándome a los cambios de cada proyecto.
          </p>
        </li>
      </ul>
    </section>
  );
};