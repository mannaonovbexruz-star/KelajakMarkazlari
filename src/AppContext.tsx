import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "./i18n/translations";

export type Theme = "light" | "dark";

interface AppContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const STORAGE_LANG_KEY = "kelajak-lang";
const STORAGE_THEME_KEY = "kelajak-theme";

function getInitialLang(): Lang {
  // ?lang=ru gipervolalarda tilni oldindan tanlash imkoni (demo/test uchun).
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "uz" || param === "ru") return param;
  }
  try {
    const stored = localStorage.getItem(STORAGE_LANG_KEY);
    if (stored === "uz" || stored === "ru") return stored;
  } catch {
    /* localStorage not available */
  }
  return "uz";
}

function getInitialTheme(): Theme {
  // ?theme=dark yoki ?theme=light — demografik ayirash misolida.
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("theme");
    if (param === "dark" || param === "light") return param;
  }
  try {
    const stored = localStorage.getItem(STORAGE_THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* localStorage not available */
  }
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "uz"
        ? "Kelajak Markazlari — O'quvchilar Kengashi"
        : "Kelajak Markazlari — Ученический Совет";
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: translations[lang],
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [lang, theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
