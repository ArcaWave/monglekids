import Logo from "./Logo";
import { useLang } from "../i18n/LanguageContext";

type Props = {
  onNavigate?: (to: string) => void;
};

export default function Footer({ onNavigate }: Props) {
  const { t } = useLang();

  const handlePrivacy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate("/privacy");
  };

  return (
    <footer className="border-t border-grape-100/70 bg-cream-50">
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-ink-600">
              {t.footer.tagline}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-2 text-[13.5px] font-semibold text-ink-700 sm:grid-cols-4"
          >
            <a className="transition hover:text-grape-700" href="/#why">{t.footer.nav.about}</a>
            <a className="transition hover:text-grape-700" href="/#beta">{t.footer.nav.beta}</a>
            <a className="transition hover:text-grape-700" href="/#experience">{t.footer.nav.experience}</a>
            <a className="transition hover:text-grape-700" href="mailto:help@arcawave.xyz">{t.footer.nav.contact}</a>
            <a className="transition hover:text-grape-700" href="/privacy" onClick={handlePrivacy}>
              {t.footer.nav.privacy}
            </a>
            <a className="transition hover:text-grape-700" href="/privacy" onClick={handlePrivacy}>
              {t.footer.nav.terms}
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-grape-100/60 pt-6 text-[12px] text-ink-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} MongleKids · 몽글키즈. {t.footer.rights}</p>
          <p>{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}
