import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          ¡Hola! Soy Gonzalo <span className={styles.wave}>👋🏻</span>
        </h1>
        <p className={styles.subtitle}>Desarrollador Full Stack</p>
        <p className={styles.degree}>
          Téc. Analista de Sistemas · Graduado
        </p>
        <p className={styles.description}>
          Con experiencia en análisis y desarrollo <br /> de sistemas, participo en proyectos reales bajo metodologías ágiles, aplicando una mirada analítica y comunicación asertiva para transformar ideas en soluciones digitales.
        </p>

        <div className={styles.buttonGroup}>
          {/* <a
            href="mailto:gonzalo.agusrios@gmail.com"
            className={styles.contactBtn}
          >
            Contáctame
          </a> */}
          <a
            href={`${import.meta.env.BASE_URL}files/Curriculum_Vitae_2025_Rios_Gonzalo_Agustin.pdf`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Descargar CV
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage3.png")}
        alt="Perfil"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};