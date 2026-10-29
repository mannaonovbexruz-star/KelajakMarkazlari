import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useApp } from "../AppContext";
import type { Member } from "../data/members";

interface Props {
  member: Member;
  index: number;
  onOpen: (m: Member) => void;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MemberCard({ member, index, onOpen }: Props) {
  const { lang, t } = useApp();
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="member-card"
      layout
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: reduced ? 0 : (index % 4) * 0.08 }}
      whileHover={reduced ? undefined : { y: -6 }}
    >
      <button
        type="button"
        className="member-photo-btn"
        onClick={() => onOpen(member)}
        aria-label={`${member.name[lang]} — ${t.council.seeProfile}`}
      >
        <div className="member-photo">
          <MemberAvatar member={member} />
        </div>
        <span className="member-open-hint" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </button>

      <div className="member-body">
        <div className="member-grade">
          <GraduationCap size={14} />
          <span>{member.grade}</span>
        </div>
        <h3 className="member-name">{member.name[lang]}</h3>
        <p className="member-position">{member.position[lang]}</p>
        <p className="member-bio">{member.bio[lang]}</p>
        <button type="button" className="member-link" onClick={() => onOpen(member)}>
          {t.council.seeProfile}
        </button>
      </div>
    </motion.article>
  );
}

function MemberAvatar({ member }: { member: Member }) {
  const { lang } = useApp();
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="member-initials">{initials(member.name[lang])}</div>;
  }
  return (
    <img
      src={member.photo}
      alt={member.name[lang]}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
