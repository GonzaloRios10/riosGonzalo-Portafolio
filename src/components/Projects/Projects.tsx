import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>

      {/* Slider para desktop/tablet */}
      <div className={styles.slider}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          initialSlide={1}
          spaceBetween={30}
          loop={false}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.card}>
              <img
                src={`${import.meta.env.BASE_URL}${project.imageSrc.replace(/^\//, '')}`}
                alt={project.title}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.techGroup}>
                {project.skills.map((skill, i) => (
                  <span key={i} className={styles.techTag}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className={styles.buttonGroup}>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    aria-label="GitHub"
                  >
                    {/* ícono de GitHub */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.385c.6.113.82-.26.82-.577v-2.176c-3.34.725-4.042-1.607-4.042-1.607-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.206.085 1.84 1.24 1.84 1.24 1.07 1.837 2.809 1.306 3.493.998.107-.777.418-1.305.762-1.605-2.666-.307-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.62-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.826.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards apiladas para móvil */}
      <div className={styles.cardsStack}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img
              src={`${import.meta.env.BASE_URL}${project.imageSrc.replace(/^\//, '')}`}
              alt={project.title}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.techGroup}>
              {project.skills.map((skill, i) => (
                <span key={i} className={styles.techTag}>
                  {skill}
                </span>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.385c.6.113.82-.26.82-.577v-2.176c-3.34.725-4.042-1.607-4.042-1.607-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.206.085 1.84 1.24 1.84 1.24 1.07 1.837 2.809 1.306 3.493.998.107-.777.418-1.305.762-1.605-2.666-.307-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.62-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.826.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
