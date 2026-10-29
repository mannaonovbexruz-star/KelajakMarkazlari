import { motion, useReducedMotion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ tag, title, description }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="section-heading"
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-tag">
        <span className="badge-line" />
        <span>{tag}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  );
}
