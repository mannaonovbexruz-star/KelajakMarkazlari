import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useApp } from "../AppContext";

/* Curved left boundary of the photo in objectBoundingBox units (0..1).
   Shared by the CSS clip-path mask and the decorative gold line,
   so the outline always matches the photo edge at every screen size. */
const PHOTO_CLIP =
  "M0.115,0 L1,0 L1,1 L0.03,1 " +
  "C0.115,0.9 0.075,0.82 0.045,0.72 " +
  "C0.01,0.6 0.035,0.5 0.07,0.4 " +
  "C0.104,0.31 0.1,0.2 0.055,0.115 " +
  "C0.03,0.075 0.05,0.02 0.115,0 Z";

/* Only the curved segment, offset slightly toward the white side,
   drawn top -> bottom as the thin gold rule hugging the photo edge. */
const GOLD_CURVE =
  "M0.103,0 " +
  "C0.038,0.02 0.018,0.075 0.043,0.115 " +
  "C0.088,0.2 0.092,0.31 0.058,0.4 " +
  "C0.023,0.5 0.006,0.6 0.033,0.72 " +
  "C0.063,0.82 0.103,0.9 0.018,1";

const IMAGE_CANDIDATES = ["/images/hero-students.jpg", "/images/f22.png"];

function HeroPhoto({ alt }: { alt: string }) {
  const [index, setIndex] = useState(0);
  const allFailed = index >= IMAGE_CANDIDATES.length;

  return (
    <>
      <svg className="hero-clip-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="hero-photo-clip" clipPathUnits="objectBoundingBox">
            <path d={PHOTO_CLIP} />
          </clipPath>
        </defs>
      </svg>

      {allFailed ? (
        <div className="hero-photo-fallback" aria-hidden="true">
          <Sparkles size={26} />
        </div>
      ) : (
        <motion.img
          className="hero-photo-img"
          key={IMAGE_CANDIDATES[index]}
          src={IMAGE_CANDIDATES[index]}
          alt={alt}
          loading="eager"
          onError={() => setIndex(index + 1)}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </>
  );
}

export default function Hero() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.14, delayChildren: 0.15 } },
  };
  const slideIn: Variants = {
    hidden: { opacity: 0, x: reduced ? 0 : -34 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p className="hero-label" variants={slideIn}>
            <span className="badge-line" />
            {t.hero.label}
          </motion.p>

          <motion.h1 className="hero-title" variants={slideIn}>
            {t.hero.titlePart1}
            <span className="hero-title-accent">{t.hero.titlePart2}</span>
          </motion.h1>

          <motion.blockquote className="hero-quote" variants={fadeUp}>
            {t.hero.quote}
          </motion.blockquote>

          <motion.p className="hero-description" variants={fadeUp}>
            {t.hero.description}
          </motion.p>

          <motion.div className="hero-ctas" variants={fadeUp}>
            <button className="btn btn-primary" onClick={() => scrollTo("council")}>
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("activity")}>
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-photo-panel">
        <HeroPhoto alt="Kelajak o'quvchilari Kengashi a'zolari" />

        <svg className="hero-gold-curve" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d={GOLD_CURVE}
            fill="none"
            stroke="var(--gold-strong)"
            strokeWidth={1.5}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: reduced ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: reduced ? 0 : 0.5, ease }}
          />
        </svg>

        <motion.span
          className="hero-overlay-text"
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 1.1, duration: 0.6, ease }}
        >
          {t.hero.overlayText}
        </motion.span>
      </div>
    </section>
  );
}
