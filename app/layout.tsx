import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Darbare e Ashrafi Betul | Makhdoom Baba Darbar",
    template: "%s | Darbare e Ashrafi Betul",
  },

  description:
    "Official website of Darbare e Ashrafi Betul – Makhdoom Baba Darbar in Betul, Madhya Pradesh. Explore the history, gallery, videos, timings, location and contact information of the Darbar.",

  keywords: [
    "Darbare e Ashrafi Betul",
    "Darbare Ashrafi Betul",
    "Makhdoom Baba Darbar",
    "Makhdoom Baba Betul",
    "Betul Darbar",
    "Ashrafi Darbar Betul",
    "Darbar Betul",
    "Dargah Betul",
    "Khanqah Betul",
    "Ashraf Nagar Betul",
    "Ghonchi Betul",
    "Sufi Darbar Betul",
    "Islamic Spiritual Center Betul",
  ],

  authors: [
    {
      name: "Darbare e Ashrafi Betul",
    },
  ],

  creator: "Darbare e Ashrafi Betul",
  publisher: "Darbare e Ashrafi Betul",
  applicationName: "Darbare e Ashrafi Betul",

  category: "Religious Organization",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Darbare e Ashrafi Betul | Makhdoom Baba Darbar",
    description:
      "Official website of Darbare e Ashrafi Betul – Makhdoom Baba Darbar in Betul, Madhya Pradesh. Discover the history, gallery, videos, timings and location.",

    type: "website",
    locale: "en_IN",
    siteName: "Darbare e Ashrafi Betul",

    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Darbare e Ashrafi Betul Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Darbare e Ashrafi Betul | Makhdoom Baba Darbar",
    description:
      "Official website of Darbare e Ashrafi Betul – Makhdoom Baba Darbar in Betul, Madhya Pradesh.",
    images: ["/images/logo.png"],
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ReligiousOrganization",

  name: "Darbare e Ashrafi Betul",

  alternateName: [
    "Makhdoom Baba Darbar",
    "Darbare Ashrafi Betul",
  ],

  description:
    "Darbare e Ashrafi Betul – Makhdoom Baba Darbar, a spiritual center in Betul, Madhya Pradesh.",

  image: "/images/logo.png",

  telephone: "+91 72230 21894",

  email: "info@darbareashrafibetul.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "GHONCHI, 8th Mile",
    addressLocality: "Betul",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "City",
    name: "Betul",
  },

  knowsAbout: [
    "Islamic spirituality",
    "Sufi tradition",
    "Khanqah",
    "Makhdoom Baba Darbar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="min-h-screen bg-[#f5ecd9] text-[#123d2b]">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}