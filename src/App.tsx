import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppProvider } from "./AppContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CouncilSection from "./components/CouncilSection";
import ValuesSection from "./components/ValuesSection";
import QuoteSection from "./components/QuoteSection";
import ProjectsSection from "./components/ProjectsSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  const [entered, setEntered] = useState(false);
  const enterSite = useCallback(() => setEntered(true), []);

  return (
    <AppProvider>
      <AnimatePresence>
        {!entered && <WelcomeScreen key="welcome" onEnter={enterSite} />}
      </AnimatePresence>
      <div className="app-shell" aria-hidden={entered ? undefined : true}>
        <Header />
        <main>
          <Hero />
          <CouncilSection />
          <ValuesSection />
          <QuoteSection />
          <ProjectsSection />
          <NewsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
