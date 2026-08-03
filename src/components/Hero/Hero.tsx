import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const techBadges = [
  { name: ".NET",       color: "#512BD4", delay: "0s",   top: "5%",  left: "14%" },
  { name: "Laravel",    color: "#FF2D20", delay: "0.4s", top: "0%",  left: "52%" },
  { name: "Angular",    color: "#DD0031", delay: "0.8s", top: "18%", left: "85%" },
  { name: "React",      color: "#61DAFB", delay: "1.2s", top: "48%", left: "90%" },
  { name: "TypeScript", color: "#3178C6", delay: "1.6s", top: "75%", left: "78%" },
  { name: "SQL",        color: "#F29111", delay: "2s",   top: "95%", left: "42%" },
  { name: "Docker",     color: "#2496ED", delay: "0.3s", top: "82%", left: "8%"  },
  { name: "Git",        color: "#F05032", delay: "0.7s", top: "55%", left: "-4%" },
  { name: "Scrum",      color: "#009FDA", delay: "1.1s", top: "28%", left: "-6%" },
];

const socials = [
  {
    href: "https://github.com/GonzaloRios10",
    label: "GitHub",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.385c.6.113.82-.26.82-.577v-2.176c-3.34.725-4.042-1.607-4.042-1.607-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.206.085 1.84 1.24 1.84 1.24 1.07 1.837 2.809 1.306 3.493.998.107-.777.418-1.305.762-1.605-2.666-.307-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.62-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.826.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/gonzalo-agust%C3%ADn-rios/",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "mailto:gonzalo.agusrios@gmail.com",
    label: "Email",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          Disponible para nuevos desafios
        </div>

        <h1 className={styles.title}>
          ¡Hola! <span className={styles.wave}>👋🏻</span>
          <br />
          Soy <span className={styles.highlight}>Gonzalo</span>{" "}
        </h1>

        <p className={styles.subtitle}>Desarrollador Full Stack SSR</p>
        <p className={styles.degree}>Téc. Analista de Sistemas · Graduado</p>

        <p className={styles.description}>
          Con experiencia en análisis y desarrollo de sistemas, participo en proyectos{" "}
          <code className={styles.codeTag}>end-to-end</code> bajo metodologías ágiles,
          transformando ideas en soluciones digitales escalables.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href="https://drive.google.com/uc?export=download&id=14ZnbZmJefGwZPibTv_DO_dEdiucSOwMV"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar CV
          </a>
          <a href="#contact" className={styles.outlineBtn}>
            Conversemos →
          </a>
        </div>

        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={styles.socialLink}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.heroImgWrapper}>
        <div className={styles.glowRing} />
        <div className={styles.imgCircle}>
          <img
            src={getImageUrl("hero/heroImage3.png")}
            alt="Perfil"
            className={styles.heroImg}
          />
        </div>
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

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="2" fill="currentColor" className={styles.scrollDot} />
        </svg>
      </div>
    </section>
  );
};