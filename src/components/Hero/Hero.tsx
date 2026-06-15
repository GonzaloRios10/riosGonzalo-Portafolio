import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const techBadges = [
  { name: ".NET",       color: "#512BD4", delay: "0s",    top: "5%",  left: "14%"},
  { name: "Laravel",    color: "#FF2D20", delay: "0.4s",  top: "0%",  left: "52%" },
  { name: "Angular",    color: "#DD0031", delay: "0.8s",  top: "18%", left: "85%" },
  { name: "React",      color: "#61DAFB", delay: "1.2s",  top: "48%", left: "90%" },
  { name: "TypeScript", color: "#3178C6", delay: "1.6s",  top: "75%", left: "78%" },
  { name: "SQL",        color: "#F29111", delay: "2s",    top: "95%", left: "42%" },
  { name: "Docker",     color: "#2496ED", delay: "0.3s",  top: "82%", left: "8%"  },
  { name: "Git",        color: "#F05032", delay: "0.7s",  top: "55%", left: "-4%" },
  { name: "Scrum",      color: "#009FDA", delay: "1.1s",  top: "28%", left: "-6%" },
];

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
          Con experiencia en análisis y desarrollo de sistemas, participo en proyectos{" "}
          <code className={styles.codeTag}>end-to-end</code> bajo metodologías ágiles,
          aplicando una mirada analítica y comunicación asertiva para transformar ideas
          en soluciones digitales.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href="https://drive.google.com/uc?export=download&id=14ZnbZmJefGwZPibTv_DO_dEdiucSOwMV"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className={styles.heroImgWrapper}>
        <img
          src={getImageUrl("hero/heroImage3.png")}
          alt="Perfil"
          className={styles.heroImg}
        />
        {techBadges.map((badge) => (
          <span
            key={badge.name}
            className={styles.techBadge}
            style={{
              color: badge.color,
              borderColor: badge.color,
              top: badge.top,
              left: badge.left,
              animationDelay: badge.delay,
              boxShadow: `0 0 10px ${badge.color}33, inset 0 0 10px ${badge.color}11`,
            }}
          >
            {badge.name}
          </span>
        ))}
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};