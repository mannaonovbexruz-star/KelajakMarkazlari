import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AtSign, GraduationCap, Mail, Send, X } from "lucide-react";
import { useApp } from "../AppContext";
import type { Member } from "../data/members";

interface Props {
  member: Member | null;
  onClose: () => void;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MemberModal({ member, onClose }: Props) {
  const { lang, t } = useApp();
  const reduced = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    if (member) {
      setPhotoFailed(false);
      // Fokusni modalga o'tkazamiz va yopilganda qaytaramiz.
      const opener = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(".modal-close")?.focus();
      });
      return () => opener?.focus();
    }
  }, [member]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (member) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [member, onClose]);

  const interests = member
    ? (member.interests?.[lang] ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="member-modal"
            role="dialog"
            aria-modal="true"
            aria-label={member.name[lang]}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>

            <div className="modal-photo-wrap">
              <div className="modal-photo">
                {photoFailed ? (
                  <div className="member-initials">{initials(member.name[lang])}</div>
                ) : (
                  <img
                    src={member.photo}
                    alt={member.name[lang]}
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </div>

            <div className="modal-body">
              <span className="modal-grade">
                <GraduationCap size={14} /> {member.grade}
              </span>
              <h3 className="modal-name">{member.name[lang]}</h3>
              <p className="modal-role">{member.position[lang]}</p>
              <span className="modal-gold-rule" />
              <p className="modal-bio">{member.bio[lang]}</p>

              {interests.length > 0 && (
                <div className="modal-interests">
                  <h4>{t.council.interests}</h4>
                  <ul>
                    {interests.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-contacts">
                <a className="modal-contact" href={`mailto:${member.email}`}>
                  <span className="modal-contact-icon">
                    <Mail size={16} />
                  </span>
                  {member.email}
                </a>
                <a
                  className="modal-contact"
                  href={`https://t.me/${member.telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="modal-contact-icon">
                    <Send size={16} />
                  </span>
                  {member.telegram}
                </a>
                <span className="modal-contact modal-contact-static">
                  <span className="modal-contact-icon">
                    <AtSign size={16} />
                  </span>
                  {lang === "uz" ? "Kengash a'zosi" : "Член Совета"}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
