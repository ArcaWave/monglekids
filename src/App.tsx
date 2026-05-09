import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Shift from "./components/Shift";
import Solution from "./components/Solution";
import Experience from "./components/Experience";
import ParentValue from "./components/ParentValue";
import Differentiation from "./components/Differentiation";
import Framework from "./components/Framework";
import BetaForm from "./components/BetaForm";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import PrivacyPage from "./components/PrivacyPage";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  const [path, setPath] = useState<string>(
    typeof window !== "undefined" ? window.location.pathname : "/",
  );
  const [, setBump] = useState(0);

  // Sync with browser back/forward.
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Client-side navigation that updates the URL without a full reload.
  const navigate = useCallback((to: string) => {
    if (typeof window === "undefined") return;
    if (to !== window.location.pathname) {
      window.history.pushState({}, "", to);
      setPath(to);
      window.scrollTo(0, 0);
    }
  }, []);

  // Smooth-scroll to a section. If we're not on the home page, navigate
  // home first and then scroll once the landing page renders.
  const scrollToId = useCallback(
    (id: string) => {
      const doScroll = () => {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      };

      if (path !== "/") {
        navigate("/");
        // Wait one tick for the landing page to mount.
        setTimeout(doScroll, 60);
      } else {
        doScroll();
      }
      setBump((n) => n + 1);
    },
    [path, navigate],
  );

  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-clip bg-cream-50 text-ink-800">
        {path === "/privacy" ? (
          <PrivacyPage onNavigate={navigate} onScrollTo={scrollToId} />
        ) : (
          <>
            <Header
              onCtaClick={() => scrollToId("beta")}
              onNavClick={scrollToId}
            />
            <main>
              <Hero
                onPrimary={() => scrollToId("beta")}
                onSecondary={() => scrollToId("experience")}
              />
              <Problem />
              <Shift />
              <Solution />
              <Experience />
              <ParentValue onCta={() => scrollToId("beta")} />
              <Differentiation />
              <Framework />
              <BetaForm />
              <FAQ />
              <FinalCTA onCta={() => scrollToId("beta")} />
            </main>
            <Footer onNavigate={navigate} />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}
