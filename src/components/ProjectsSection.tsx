import { motion, useReducedMotion } from "framer-motion";
import { CircleCheck, CircleDot } from "lucide-react";
import { useApp } from "../AppContext";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const { t, lang } = useApp();
  const reduced = useReducedMotion();

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <SectionHeading
          tag={t.projects.tag}
          title={t.projects.title}
          description={t.projects.description}
        />

        <ol className="projects-timeline">
          {projects.map((p, i) => (
            <motion.li
              key={p.id}
              className={`project-item${p.done ? " done" : " planned"}`}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: reduced ? 0 : i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="project-dot" aria-hidden="true">
                {p.done ? <CircleCheck size={18} /> : <CircleDot size={18} />}
              </span>
              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title">{p.title[lang]}</h3>
                  <span
                    className={`project-status${p.done ? " is-done" : " is-planned"}`}
                  >
                    {p.done ? t.projects.statusDone : t.projects.statusPlanned}
                  </span>
                </div>
                <span className="project-period">{p.period}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
