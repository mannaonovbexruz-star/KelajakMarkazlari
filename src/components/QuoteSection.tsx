import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { useApp } from "../AppContext";

export default function QuoteSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  return (
    <section className="quote-section" id="quote">
      <div className="container quote-inner">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="quote-icon">
            <Quote size={30} strokeWidth={1.4} />
          </span>
          <blockquote className="quote-text">«{t.quote.text}»</blockquote>
          <div className="quote-author">
            <span className="quote-author-name">{t.quote.author}</span>
            <span className="quote-author-role">{t.quote.role}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
