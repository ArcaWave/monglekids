/**
 * Site-wide constants. Single source of truth for SEO meta + JSON-LD.
 */

export const SITE = {
  name: "MongleKids",
  brandKo: "몽글키즈",
  brandEn: "MongleKids",
  url: "https://www.monglekids.com",
  defaultLocale: "ko_KR",
  altLocale: "en_US",
  twitterHandle: "@monglekids",
  themeColor: "#a594e6",

  /**
   * OG image — 1200×630, served from /public.
   * NOTE: SVG works on Discord and modern Slack but is rejected by Facebook,
   * Twitter, KakaoTalk. Run `npm run og:export` (or convert manually) to
   * produce a PNG version once the design is final, then change this back
   * to "/og-image.png".
   */
  ogImage: "/og-image.svg",
  /** Square logo for JSON-LD `logo` field */
  logo: "/og-logo.svg",

  contact: {
    email: "help@arcawave.xyz",
  },

  /** Operating company. Used in Organization schema + footer / privacy. */
  operator: {
    legalName: "Arcawave, Inc.",
    shortName: "Arcawave",
    founder: "두지언",
    foundingYear: 2026,
    address: {
      // TODO: replace with the real registered office address.
      streetAddress: "서울특별시 강남구 테헤란로 123, 4층",
      addressLocality: "서울특별시",
      addressRegion: "강남구",
      postalCode: "06234",
      addressCountry: "KR",
    },
  },

  /**
   * sameAs profile URLs. Placeholders for now — used by Organization JSON-LD
   * to help search engines and AI assistants link MongleKids to our other
   * surfaces. Update these when real profiles exist.
   */
  sameAs: [
    "https://www.instagram.com/monglekids",
    "https://x.com/monglekids",
    "https://www.youtube.com/@monglekids",
    "https://www.linkedin.com/company/arcawave",
    "https://github.com/ArcaWave",
  ],

  /**
   * Verification meta values. Fill in once you've registered the domain in
   * each console — every value here is rendered as a `<meta>` tag.
   */
  verification: {
    google: "",
    naver: "74a2daaef12c0e097b25e7f65814aa93f42ae5ca",
    bing: "",
  },
} as const;

export type SiteConfig = typeof SITE;

/** Build an absolute URL from a path. */
export function abs(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
