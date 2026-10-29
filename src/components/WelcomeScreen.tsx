import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "../AppContext";

interface Props {
  onEnter: () => void;
}

const WELCOME_DURATION = 2400;

export default function WelcomeScreen({ onEnter }: Props) {
  const { t } = useApp();
  const reduced = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(onEnter, WELCOME_DURATION);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
    };
  }, [onEnter]);

  return (
    <motion.div
      className="welcome-screen"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.4 }}
    >
      <motion.div
        className="welcome-card"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="welcome-mark" aria-hidden="true">
          K
        </span>
        <p className="welcome-eyebrow">{t.hero.badge}</p>
        <h1 className="welcome-title" id="welcome-title">
          {t.welcome.greeting}
        </h1>
        <p className="welcome-subtitle">{t.welcome.subtitle}</p>
        <span className="welcome-rule" aria-hidden="true" />
        <span className="welcome-progress" aria-hidden="true">
          <span />
        </span>
      </motion.div>
    </motion.div>
  );
}
