import styles from "./Services.module.css";
import reveal from "../../styles/reveal.module.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const servicesData = [
  {
    title: "Desarrollo Web a Medida",
    description:
      "Diseño y desarrollo de sitios web y aplicaciones adaptados 100% a tus necesidades: desde landing pages hasta sistemas internos.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo end-to-end: frontend moderno, backend robusto, base de datos optimizada y despliegue en producción.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "APIs e Integraciones",
    description:
      "Desarrollo e integración de APIs REST y conexión con servicios externos.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Soporte y Mantenimiento",
    description:
      "Corrección de errores, mejoras de rendimiento y nuevas funcionalidades para proyectos web existentes.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

export const Services = () => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="services"
      className={`${styles.container} ${isVisible ? reveal.show : reveal.hidden}`}
    >
      <p className={styles.label}>Trabaja Conmigo</p>
      <h2 className={styles.title}>Servicios</h2>
      <p className={styles.subtitle}>
        ¿Necesitás un desarrollador para tu proyecto? Trabajo con clientes de forma
        independiente, ofreciendo soluciones a medida con comunicación clara y resultados
        concretos.
      </p>

      <div className={styles.grid}>
        {servicesData.map((service, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaTitle}>¿Tenés un proyecto en mente?</h3>
          <p className={styles.ctaSubtitle}>Hablemos y encontremos la mejor solución para vos.</p>
        </div>
        <a 
          href="https://wa.me/543764526309?text=Hola%20Gonzalo!%20Me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20para%20mi%20negocio."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Solicitar presupuesto
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
};