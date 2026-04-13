import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Rubik } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const rubik = Rubik({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://directevents.click"),
  title: {
    default: "Direct Events | ديركت - تنظيم المؤتمرات والمعارض الدولية",
    template: "%s | Direct Events"
  },
  description: "المزود الرائد لخدمات تنظيم المؤتمرات والمعارض في المملكة العربية السعودية ومصر. نوفر حلولاً متكاملة تشمل تنظيم الفعاليات، حجز الفنادق، واستقبال كبار الشخصيات.",
  keywords: [
    "تنظيم مؤتمرات", "تنظيم معارض", "فعاليات كبرى", "Direct Events", "Event Management Saudi Arabia",
    "Conference Organizing Egypt", "المعارات الدولية", "حجز فنادق للمؤتمرات", "تنسيق فعاليات"
  ],
  alternates: {
    canonical: "https://directevents.click",
  },
  authors: [{ name: "Direct Events Team" }],
  creator: "Direct Events",
  publisher: "Direct Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://directevents.click",
    siteName: "Direct Events",
    title: "Direct Events | ديركت - شريككم في النجاح الميداني",
    description: "حلول احترافية لتنظيم المؤتمرات والمعارض الدولية بأعلى معايير الجودة.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Events Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Events | ديركت",
    description: "تنظيم المؤتمرات والمعارض الدولية بكل احترافية.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": 0,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var lang = localStorage.getItem('language') || 'ar';
                  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                  document.documentElement.lang = lang;
                } catch (e) {}
              })();
            `,
          }}
        />
        <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js" type="module" />
      </head>
      <body className={`${poppins.variable} ${rubik.variable} font-sans`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="white"
            enableSystem
            value={{ light: "white", dark: "black" }}
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
