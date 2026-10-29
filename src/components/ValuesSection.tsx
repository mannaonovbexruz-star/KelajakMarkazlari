import { motion, useReducedMotion } from "framer-motion";
import { Crown, Handshake, Lightbulb, TrendingUp, type LucideIcon } from "lucide-react";
import { useApp } from "../AppContext";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  crown: Crown,
  handshake: Handshake,
  lightbulb: Lightbulb,
  "trending-up": TrendingUp,
};

export default function ValuesSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  return (
    <section className="values-section" id="activity">
      <div className="container">
        <SectionHeading tag={t.values.tag} title={t.values.title} description={t.values.description} />

        <div className="values-grid">
          {t.values.items.map((v, i) => {
            const Icon = ICONS[v.icon] ?? Lightbulb;
            return (
              <motion.article
                className="value-card"
                key={v.title}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: reduced ? 0 : i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduced ? undefined : { y: -6 }}
              >
                <span className="value-index">0{i + 1}</span>
                <span className="value-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-text">{v.text}</p>
                <span className="value-gold-rule" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
