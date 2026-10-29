import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Phone, SendHorizonal } from "lucide-react";
import { useApp } from "../AppContext";
import SectionHeading from "./SectionHeading";

interface MessagePayload {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const STORAGE_KEY = "kelajak-contact-messages";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readStored(): MessagePayload[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MessagePayload[]) : [];
  } catch {
    return [];
  }
}

export default function ContactSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const f = t.contact.form;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = f.errorName;
    if (!EMAIL_RE.test(email)) nextErrors.email = f.errorEmail;
    if (!message.trim()) nextErrors.message = f.errorMessage;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    // Simulate submit + persist locally so nothing is lost.
    window.setTimeout(() => {
      const stored = readStored();
      stored.push({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch {
        /* storage full or unavailable */
      }
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      window.setTimeout(() => setSent(false), 4000);
    }, 700);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <SectionHeading tag={t.contact.tag} title={t.contact.title} description={t.contact.description} />

        <div className="contact-layout">
          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            noValidate
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="form-field">
              <label htmlFor="contact-name">{f.name}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={errors.name ? "has-error" : ""}
              />
              {errors.name && (
                <span className="form-error" id="contact-name-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">{f.email}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={errors.email ? "has-error" : ""}
              />
              {errors.email && (
                <span className="form-error" id="contact-email-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">{f.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={message}
                placeholder={f.messagePlaceholder}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={errors.message ? "has-error" : ""}
              />
              {errors.message && (
                <span className="form-error" id="contact-message-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button className="btn btn-primary form-submit" type="submit" disabled={sending}>
              {sending ? f.sending : f.send}
              {!sending && <SendHorizonal size={18} />}
            </button>

            <p className="form-demo-note">{f.demoNote}</p>

            {sent && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={18} />
                {f.success}
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className="contact-info"
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{f.infoTitle}</h3>
            <div className="contact-info-row">
              <span className="contact-info-icon"><MapPin size={18} /></span>
              <div>
                <span className="contact-info-label">{f.addressLabel}</span>
                <span>{f.address}</span>
              </div>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-icon"><Phone size={18} /></span>
              <div>
                <span className="contact-info-label">{f.phoneLabel}</span>
                <a href="tel:+9987120000000">+998 71 200 00 00</a>
              </div>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-icon"><Clock size={18} /></span>
              <div>
                <span className="contact-info-label">{f.hoursLabel}</span>
                <span>{f.hours}</span>
              </div>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-icon"><Mail size={18} /></span>
              <div>
                <span className="contact-info-label">Email</span>
                <a href="mailto:council@kelajak.uz">council@kelajak.uz</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
