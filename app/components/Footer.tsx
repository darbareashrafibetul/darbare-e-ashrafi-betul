"use client";

import { motion } from "framer-motion";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-gradient-to-b from-green-950 via-black to-black px-6 py-16 text-white">
      
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold text-yellow-300">
              Darbare e Ashrafi Betul
            </h3>

            <p className="mt-2 text-green-200">
              Makhdoom Baba Darbar
            </p>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              A spiritual place of peace, faith, service and blessings.
              May Allah bless everyone with peace, good health and guidance.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="mb-5 text-xl font-bold text-yellow-300">
              Quick Links
            </h4>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {[
                ["#home", "Home"],
                ["#about", "About"],
                ["#gallery", "Gallery"],
                ["#history", "History"],
                ["#timings", "Timings"],
                ["#location", "Location"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 transition duration-300 hover:text-yellow-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="mb-5 text-xl font-bold text-yellow-300">
              Contact
            </h4>

            <div className="space-y-4 text-gray-400">

              <a
                href="/location"
                className="flex items-center justify-center gap-3 transition hover:text-yellow-300 md:justify-start"
              >
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>Betul, Madhya Pradesh</span>
              </a>

              <a
                href="tel:+917223021894"
                className="flex items-center justify-center gap-3 transition hover:text-yellow-300 md:justify-start"
              >
                <FaPhoneAlt className="text-yellow-400" />
                <span>+91 72230 21894</span>
              </a>

              <a
                href="mailto:info@darbareashrafibetul.com"
                className="flex items-center justify-center gap-3 transition hover:text-yellow-300 md:justify-start"
              >
                <FaEnvelope className="text-yellow-400" />
                <span>info@darbareashrafibetul.com</span>
              </a>

            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4"
        >

          <a
            href="https://www.youtube.com/@DarbareAshrafiBetul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-white/5 text-red-500 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-red-500/10"
          >
            <FaYoutube className="text-xl" />
          </a>

          <a
            href="https://www.facebook.com/share/192E1RyYXP/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-white/5 text-blue-500 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10"
          >
            <FaFacebook className="text-xl" />
          </a>

          <a
            href="https://www.instagram.com/darbar_e_ashrafi_betul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/30 bg-white/5 text-pink-500 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-pink-500/10"
          >
            <FaInstagram className="text-xl" />
          </a>

          <a
            href="https://wa.me/917223021894"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/30 bg-white/5 text-green-500 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-green-500/10"
          >
            <FaWhatsapp className="text-xl" />
          </a>

        </motion.div>

        {/* Bottom */}
        <div className="mt-8 text-center">

          <p className="text-sm text-gray-500">
            © 2026 Darbare e Ashrafi Betul. All Rights Reserved.
          </p>

          <p className="mt-2 text-xs text-gray-600">
            Built with faith, devotion and love.
          </p>

        </div>

      </div>
    </footer>
  );
}