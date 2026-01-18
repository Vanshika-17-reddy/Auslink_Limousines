import { Montserrat, Catamaran } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://auslinklimousines.au"),
  title: {
    default: "Auslink Limousines | Premium Limousine Hire Melbourne",
    template: "%s | Auslink Limousines Melbourne",
  },
  description:
    "Melbourne's premier luxury limousine service with over 24 years of experience. Wedding cars, school formals, winery tours, corporate events & more. Book your luxury ride today!",
  keywords: [
    "limousine hire Melbourne",
    "wedding car hire Melbourne",
    "limo hire Melbourne",
    "stretch limo Melbourne",
    "school formal limo",
    "winery tour limousine",
    "corporate limousine Melbourne",
    "luxury car hire Melbourne",
    "chauffeur service Melbourne",
    "airport transfer Melbourne",
    "hens party limo",
    "bucks party limo",
    "spring racing limousine",
  ],
  authors: [{ name: "Auslink Limousines" }],
  creator: "Auslink Limousines",
  publisher: "Auslink Limousines",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://auslinklimousines.au",
    siteName: "Auslink Limousines",
    title: "Auslink Limousines | Premium Limousine Hire Melbourne",
    description:
      "Melbourne's premier luxury limousine service. Over 24 years of excellence in chauffeured transportation for weddings, formals, winery tours & more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auslink Limousines - Luxury Limousine Hire Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auslink Limousines | Premium Limousine Hire Melbourne",
    description:
      "Melbourne's premier luxury limousine service with over 24 years of experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="canonical" href="https://auslinklimousines.au" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LimousineBusService",
              name: "Auslink Limousines",
              image: "https://auslinklimousines.au/logo.png",
              "@id": "https://auslinklimousines.au",
              url: "https://auslinklimousines.au",
              telephone: "0450860035",
              email: "info@auslinklimousines.au",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Melbourne",
                addressRegion: "VIC",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -37.8136,
                longitude: 144.9631,
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -37.8136,
                  longitude: 144.9631,
                },
                geoRadius: "100000",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: ["https://www.facebook.com/auslinklimousines"],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${catamaran.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
