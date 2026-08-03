import styles from "./Contact.module.css";
import reveal from "../../styles/reveal.module.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const contactLinks = [
  {
    label: "Email",
    value: "gonzalo.agusrios@gmail.com",
    href: "mailto:gonzalo.agusrios@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/gonzalo-agustín-rios",
    href: "https://www.linkedin.com/in/gonzalo-agust%C3%ADn-rios/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/GonzaloRios10",
    href: "https://github.com/GonzaloRios10",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.385c.6.113.82-.26.82-.577v-2.176c-3.34.725-4.042-1.607-4.042-1.607-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.206.085 1.84 1.24 1.84 1.24 1.07 1.837 2.809 1.306 3.493.998.107-.777.418-1.305.762-1.605-2.666-.307-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.62-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.826.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export const Contact = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <footer
      ref={ref}
      id="contact"
      className={`${styles.container} ${isVisible ? reveal.showContact : reveal.hiddenContact}`}
    >
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.label}>Contacto</p>
          <h2 className={styles.title}>Charlemos</h2>
          <p className={styles.subtitle}>
            Estoy abierto a oportunidades laborales, proyectos freelance o simplemente a charlar un rato. <br></br>¡Escribime! 🚀
          </p>
        </div>

        <ul className={styles.links}>
          {contactLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <span className={styles.linkIcon}>{l.icon}</span>
                <div className={styles.linkText}>
                  <p className={styles.linkLabel}>{l.label}</p>
                  <p className={styles.linkValue}>{l.value}</p>
                </div>
                <svg className={styles.linkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} RGAcode · Gonzalo Rios — Todos los derechos reservados.
      </p>
    </footer>
  );
};