import { useEffect, useRef } from "react";
import styles from "./GridGlow.module.css";

export const GridGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.background = `radial-gradient(400px circle at ${e.clientX}px ${e.clientY}px, rgba(79,142,247,0.18), transparent 70%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Grilla fija */}
      <div className={styles.grid} />
      {/* Glow que sigue el mouse */}
      <div className={styles.glow} ref={glowRef} />
    </>
  );
}