"use client";

import Link from "next/link";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

/* =========================================================
   DATA
========================================================= */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Timings", href: "/timings" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DarbareAshrafiBetul",
    icon: FaYoutube,
    color: "text-[#FF0000]",
    hover:
      "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/192E1RyYXP/",
    icon: FaFacebook,
    color: "text-[#1877F2]",
    hover:
      "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/darbar_e_ashrafi_betul",
    icon: FaInstagram,
    color: "text-[#E1306C]",
    hover:
      "hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917223021894",
    icon: FaWhatsapp,
    color: "text-[#25D366]",
    hover:
      "hover:border-[#25D366]/40 hover:bg-[#25D366]/10",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C9A227]/25 bg-[#102A21] text-[#F5F1E6]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-0"
        aria-hidden="true"
      >
        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#173C2F] via-[#102A21] to-[#091B15]" />

        {/* Lightweight golden glow */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[80px]" />

        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E5C45A 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* =====================================================
          TOP GOLD LINE
      ====================================================== */}

      <div
        className="relative h-px w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* ===================================================
            TOP MESSAGE
        ==================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C9A227]/75 sm:text-[10px]">
            <span className="h-px w-7 bg-[#C9A227]/50" />

            Darbare e Ashrafi Betul

            <span className="h-px w-7 bg-[#C9A227]/50" />
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#F5F1E6] sm:text-3xl">
            Peace, Faith &amp; Devotion
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#EAE0CC]/55 sm:text-base">
            May this sacred place continue to spread peace, blessings,
            service and spiritual guidance to everyone who visits.
          </p>
        </div>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr_1.1fr] md:gap-10 lg:gap-16">

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Explore
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#F5F1E6]">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2">

              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 py-1.5 text-sm text-[#EAE0CC]/55 transition-colors duration-200 hover:text-[#C9A227]"
                >
                  <span className="h-1 w-1 rotate-45 bg-[#C9A227]/40 transition-transform duration-200 group-hover:scale-150" />

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              ))}

            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Reach Us
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#F5F1E6]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Location */}

              <Link
                href="/location"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 transition-colors duration-200 group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10">
                  <FaMapMarkerAlt className="text-sm text-[#C9A227]" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#C9A227]/55">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-[#EAE0CC]/65 transition-colors duration-200 group-hover:text-[#C9A227]">
                    Betul, Madhya Pradesh
                  </span>
                </span>
              </Link>

              {/* Phone */}

              <a
                href="tel:+917223021894"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 transition-colors duration-200 group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10">
                  <FaPhoneAlt className="text-sm text-[#C9A227]" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#C9A227]/55">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm text-[#EAE0CC]/65 transition-colors duration-200 group-hover:text-[#C9A227]">
                    +91 72230 21894
                  </span>
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:info@darbareashrafibetul.com"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 transition-colors duration-200 group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10">
                  <FaEnvelope className="text-sm text-[#C9A227]" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#C9A227]/55">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm text-[#EAE0CC]/65 transition-colors duration-200 group-hover:text-[#C9A227]">
                    info@darbareashrafibetul.com
                  </span>
                </span>
              </a>

            </div>
          </div>

          {/* =================================================
              SOCIAL / CONNECT
          ================================================== */}

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Stay Connected
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#F5F1E6]">
              Follow Us
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#EAE0CC]/55">
              Follow our official social media channels for updates,
              videos, events and moments from Darbare e Ashrafi Betul.
            </p>

            {/* Social Icons */}

            <div className="mt-6 flex gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition-all duration-200 hover:-translate-y-1 ${social.hover}`}
                  >
                    <Icon
                      className={`text-lg ${social.color}`}
                    />
                  </a>
                );
              })}

            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/917223021894"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/5 px-5 py-2.5 text-xs font-semibold text-[#25D366] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
            >
              <FaWhatsapp className="text-sm" />

              <span>Connect on WhatsApp</span>

              <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-1" />
            </a>

          </div>
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

          {/* Copyright */}

          <div>
            <p className="text-xs text-[#EAE0CC]/45 sm:text-sm">
              © 2026 Darbare e Ashrafi Betul. All Rights Reserved.
            </p>

            <p className="mt-1.5 text-[10px] text-[#C9A227]/40 sm:text-xs">
              Built with faith, devotion and love.
            </p>
          </div>

          {/* Back To Top */}

          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 px-4 py-2.5 text-xs font-semibold text-[#C9A227] transition-all duration-200 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/10 active:scale-95"
          >
            <span>Back to top</span>

            <FaArrowUp className="text-[9px] transition-transform duration-200 group-hover:-translate-y-1" />
          </button>

        </div>
      </div>

      {/* =====================================================
          BOTTOM GOLD LINE
      ====================================================== */}

      <div
        className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent"
        aria-hidden="true"
      />

    </footer>
  );
}