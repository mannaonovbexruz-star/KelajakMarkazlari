import { useState, type FormEvent } from "react";
import { MapPin, Send, Phone } from "lucide-react";
import { useApp } from "../AppContext";

const NAV_IDS = ["home", "council", "activity", "projects", "news", "contact"] as const;

const NAV_KEYS = {
  home: "home",
  council: "council",
  activity: "activity",
  projects: "projects",
  news: "news",
  contact: "contact",
} as const;

export default function Footer() {
  const { t } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      localStorage.setItem("kelajak-newsletter", email.trim());
    } catch {
      /* ignore */
    }
    setEmail("");
    setSubscribed(true);
    window.setTimeout(() => setSubscribed(false), 4000);
  };

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/images/kelajak-logo.png"
            alt="Kelajak Markazlari logo"
            className="footer-logo"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <h3>{t.footer.aboutTitle}</h3>
          <p>{t.footer.about}</p>
          <span className="footer-made">{t.footer.madeWith}</span>
        </div>

        <div className="footer-col">
          <h4>{t.footer.navTitle}</h4>
          <ul>
            {NAV_IDS.map((id) => (
              <li key={id}>
                <button onClick={() => go(id)}>{t.nav[NAV_KEYS[id]]}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footer.contactTitle}</h4>
          <ul className="footer-contacts">
            <li>
              <MapPin size={15} />
              <span>{t.contact.form.address}</span>
            </li>
            <li>
              <Phone size={15} />
              <a href="tel:+9987120000000">+998 71 200 00 00</a>
            </li>
            <li>
              <Send size={15} />
              <a href="mailto:council@kelajak.uz">council@kelajak.uz</a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>{t.footer.newsletterTitle}</h4>
          <p>{t.footer.newsletter}</p>
          <form onSubmit={onSubscribe}>
            <input
              type="email"
              placeholder={t.footer.newsletterPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label={t.footer.newsletterPlaceholder}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              {t.footer.subscribe}
            </button>
          </form>
          {subscribed && <span className="footer-subscribed">{t.footer.subscribed}</span>}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Kelajak Markazlari — O'quvchilar Kengashi. {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
