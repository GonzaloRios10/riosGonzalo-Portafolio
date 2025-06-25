import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hola! Soy Gonzalo <span className={styles.wave}>👋🏻</span>
        </h1>
        <p className={styles.subtitle}>Desarrollador FullStack</p>
        <p className={styles.description}>
          Apasionado por la informática y el aprendizaje continuo, con experiencia en desarrollo y en busca de nuevos desafíos para crecer tanto personal como profesionalmente.
        </p>

        <div className={styles.buttonGroup}>
          {/* <a
            href="mailto:gonzalo.agusrios@gmail.com"
            className={styles.contactBtn}
          >
            Contáctame
          </a> */}
          <a
            href="/files/Curriculum_Vitae_2025_Rios_Gonzalo_Agustin.pdf"
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
        src={getImageUrl("hero/heroImage.png")}
        alt="Perfil"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};