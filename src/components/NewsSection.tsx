import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useApp } from "../AppContext";
import { news } from "../data/news";
import SectionHeading from "./SectionHeading";

export default function NewsSection() {
  const { t, lang } = useApp();
  const reduced = useReducedMotion();

  return (
    <section className="news-section" id="news">
      <div className="container">
        <SectionHeading
          tag={t.news.tag}
          title={t.news.title}
          description={t.news.description}
        />

        <ul className="news-list">
          {news.map((n, i) => (
            <motion.li
              key={n.id}
              className="news-item"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: reduced ? 0 : i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="news-date">
                <CalendarDays size={15} />
                {n.date}
              </span>
              <div className="news-body">
                <h3 className="news-title">{n.title[lang]}</h3>
                <p className="news-excerpt">{n.excerpt[lang]}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <p className="news-sample-note">{t.news.sampleNote}</p>
      </div>
    </section>
  );
}
