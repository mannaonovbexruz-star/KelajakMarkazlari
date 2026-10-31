import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useApp } from "../AppContext";
import { members, type Member } from "../data/members";
import MemberCard from "./MemberCard";
import MemberModal from "./MemberModal";
import SectionHeading from "./SectionHeading";

type FilterKey = "all" | "rais" | "orinbosar" | "azolar";

const FILTERS: FilterKey[] = ["all", "rais", "orinbosar", "azolar"];

export default function CouncilSection() {
  const { t, lang } = useApp();
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Member | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = [...members];
    if (filter !== "all" && filter !== "rais") {
      list = list.filter((m) => m.role === filter);
    }
    if (q) {
      list = list.filter(
        (m) =>
          m.name[lang].toLowerCase().includes(q) ||
          m.position[lang].toLowerCase().includes(q) ||
          (m.interests?.[lang]?.toLowerCase().includes(q) ?? false),
      );
    }
    return list;
  }, [filter, query, lang]);

  return (
    <section className="council-section" id="council">
      <div className="container">
        <SectionHeading
          tag={t.council.tag}
          title={t.council.title}
          description={t.council.description}
        />

        <div className="council-controls">
          <div className="council-filters" role="group" aria-label={t.council.tag}>
            {FILTERS.map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                className={`filter-btn${filter === key ? " active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {t.council.filters[key]}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.council.searchPlaceholder}
              aria-label={t.council.searchPlaceholder}
            />
            {query && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <motion.div layout className="council-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((m, i) => (
              <motion.div
                key={m.id}
                layout
                initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
              >
                <MemberCard member={m} index={i} onOpen={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <motion.div
            className="council-empty"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Search size={22} aria-hidden="true" />
            <h3>{t.council.empty}</h3>
            <p>{t.council.emptyHint}</p>
          </motion.div>
        )}

        <p className="council-sample-note">{t.council.sampleNote}</p>
      </div>

      <MemberModal member={active} onClose={() => setActive(null)} />
    </section>
  );
}
