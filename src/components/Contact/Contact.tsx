import styles from "./Contact.module.css";
import reveal from "../../styles/reveal.module.css";
import { getImageUrl } from "../../utils";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export const Contact = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <footer ref={ref} id="contact" className={`${styles.container} ${isVisible ? reveal.showContact : reveal.hiddenContact}`}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>Conectemos</h2>
          <p className={styles.subtitle}>
            Abierto a oportunidades, colaboraciones o simplemente a charlar un rato 🚀
          </p>
        </div>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a
              href="mailto:gonzalo.agusrios@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gonzalo.agusrios@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/gonzalo-agust%C3%ADn-rios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/gonzalo-agustín-rios
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />
            <a
              href="https://github.com/GonzaloRios10"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/GonzaloRios10
            </a>
          </li>
        </ul>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} RGAcode. Todos los derechos reservados.
      </p>
    </footer>
  );
};
