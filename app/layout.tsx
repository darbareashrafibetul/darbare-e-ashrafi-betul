import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Darbare e Ashrafi Betul",
    template: "%s | Darbare e Ashrafi Betul",
  },

  description:
    "Official website of Darbare e Ashrafi Betul – Makhdoom Baba Darbar. A spiritual center of peace, faith, healing, and humanity.",

  keywords: [
    "Darbare e Ashrafi Betul",
    "Makhdoom Baba Darbar",
    "Betul Darbar",
    "Ashrafi Darbar",
    "Islamic Spiritual Center",
    "Dargah Betul",
    "Sufi Darbar",
    "Makhdoom Baba",
  ],

  authors: [
    {
      name: "Darbare e Ashrafi Betul",
    },
  ],

  creator: "Darbare e Ashrafi Betul",

  applicationName: "Darbare e Ashrafi Betul",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Darbare e Ashrafi Betul",
    description:
      "Official website of Darbare e Ashrafi Betul – Makhdoom Baba Darbar.",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Darbare e Ashrafi Betul",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Darbare e Ashrafi Betul",

    description:
      "Official website of Darbare e Ashrafi Betul.",

    images: ["/images/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}