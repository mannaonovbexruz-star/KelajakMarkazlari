import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useApp } from "../AppContext";

const NAV_SECTIONS = [
  { id: "home", key: "home" },
  { id: "council", key: "council" },
  { id: "activity", key: "activity" },
  { id: "projects", key: "projects" },
  { id: "news", key: "news" },
  { id: "contact", key: "contact" },
] as const;

function Logo() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="logo-fallback">
        <span className="logo-fallback-mark">K</span>
        <span className="logo-fallback-text">KELAJAK MARKAZLARI</span>
      </span>
    );
  }
  return (
    <img
      src="/images/Kelajak.png"
      alt="Kelajak Markazlari logo"
      className="logo-img"
      onError={() => setFailed(true)}
    />
  );
}

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Scroll spy: ekranda qaysi section ko'rinyapti
  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const s of sections) {
        if (s.offsetTop <= probe) current = s.id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-inner">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          <Logo />
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_SECTIONS.map((item) => (
            <button
              key={item.id}
              className={`nav-link${activeSection === item.id ? " active" : ""}`}
              aria-current={activeSection === item.id ? "true" : undefined}
              type="button"
              onClick={() => go(item.id)}
            >
              {t.nav[item.key]}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            {(["uz", "ru"] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-btn${lang === code ? " active" : ""}`}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="theme-icon"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            className="icon-btn menu-toggle"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            {NAV_SECTIONS.map((item, i) => (
              <motion.button
                key={item.id}
                className="mobile-nav-link"
                onClick={() => go(item.id)}
                initial={{ x: 24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 24, opacity: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                {t.nav[item.key]}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
