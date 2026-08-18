"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaMosque,
} from "react-icons/fa";

const contactItems = [
  {
    title: "Visit Us",
    label: "Address",
    icon: FaMapMarkerAlt,
    content: (
      <>
        Darbare e Ashrafi Betul
        <br />
        Betul, Madhya Pradesh
      </>
    ),
    href: "/location",
    action: "View Location",
  },
  {
    title: "Call Us",
    label: "Phone",
    icon: FaPhoneAlt,
    content: "+91 72230 21894",
    href: "tel:+917223021894",
    action: "Call Now",
  },
  {
    title: "Email Us",
    label: "Email",
    icon: FaEnvelope,
    content: "info@darbareashrafibetul.com",
    href: "mailto:info@darbareashrafibetul.com",
    action: "Send Email",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5ecd9] px-5 py-24 text-[#123d2b] sm:px-6 md:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d4a514]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#123d2b]/[0.06] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#d4a514]/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d4a514]/40 bg-white/60 shadow-[0_8px_30px_rgba(18,61,43,0.08)]"
          >
            <FaMosque className="text-2xl text-[#c79b13]" />
          </motion.div>

          {/* Small Label */}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c79b13] sm:text-sm">
            Get In Touch
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-[#123d2b] sm:text-5xl md:text-6xl">
            Contact Us
          </h2>

          {/* Golden Divider */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4a514]/60 sm:w-16" />

            <span className="h-2 w-2 rotate-45 bg-[#d4a514]" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4a514]/60 sm:w-16" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#496257] sm:text-base md:text-lg">
            Feel free to visit Darbare e Ashrafi Betul or get in touch with us
            for information, assistance, and guidance.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT CARDS
        =================================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#123d2b]/10 bg-white/65 p-7 text-center shadow-[0_15px_50px_rgba(18,61,43,0.08)] backdrop-blur-sm transition-all duration-500 hover:border-[#d4a514]/50 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(18,61,43,0.13)] sm:p-8"
              >
                {/* Top Golden Line */}
                <div
                  className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#d4a514] transition-all duration-500 group-hover:w-2/3"
                  aria-hidden="true"
                />

                {/* Soft Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4a514]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4a514]/30 bg-[#f8f0df] shadow-sm"
                >
                  <Icon className="text-2xl text-[#c79b13]" />
                </motion.div>

                {/* Label */}
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#c79b13]">
                  {item.label}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-[#123d2b]">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mx-auto mt-3 h-px w-10 bg-[#d4a514]/50 transition-all duration-300 group-hover:w-16" />

                {/* Content */}
                <div className="mt-5 min-h-[56px] text-sm leading-7 text-[#52665c] sm:text-base">
                  {item.content}
                </div>

                {/* Action */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#123d2b]/10 bg-[#123d2b]/[0.04] px-5 py-2.5 text-sm font-semibold text-[#123d2b] transition-all duration-300 group-hover:border-[#d4a514]/30 group-hover:bg-[#d4a514]/10">
                  <span>{item.action}</span>

                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ===================================================
            WELCOME MESSAGE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#123d2b]/10 bg-[#123d2b] px-6 py-8 text-center shadow-[0_20px_60px_rgba(18,61,43,0.15)] sm:px-10 sm:py-9">
            {/* Golden Glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-[#d4a514]/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Small Icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a514]/30 bg-[#d4a514]/10">
                <FaMosque className="text-lg text-[#e0b52b]" />
              </div>

              <p className="mt-5 text-base leading-7 text-[#e7eee9] sm:text-lg">
                We warmly welcome you to visit{" "}
                <span className="font-bold text-[#e0b52b]">
                  Darbare e Ashrafi Betul
                </span>{" "}
                and experience a place of peace, faith and spirituality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM DECORATION
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4a514]/40 sm:w-20" />

          <FaMosque className="text-sm text-[#c79b13]/60" />

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4a514]/40 sm:w-20" />
        </motion.div>
      </div>
    </section>
  );
}