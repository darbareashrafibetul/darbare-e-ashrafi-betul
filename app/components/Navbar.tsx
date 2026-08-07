"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-yellow-500/20 bg-black/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Darbare e Ashrafi Betul Logo"
            width={55}
            height={55}
            priority
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-bold text-yellow-300">
              Darbare e Ashrafi Betul
            </h1>

            <p className="text-xs text-green-200">
              Makhdoom Baba Darbar
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
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
              className="font-medium text-white transition-all duration-300 hover:text-yellow-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.youtube.com/@DarbareAshrafiBetul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaYoutube className="text-2xl text-red-500" />
          </a>

          <a
            href="https://www.facebook.com/share/192E1RyYXP/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaFacebook className="text-2xl text-blue-500" />
          </a>

          <a
            href="https://www.instagram.com/darbar_e_ashrafi_betul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>

          <a
            href="https://wa.me/917223021894"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-3xl text-yellow-300 transition hover:text-yellow-400 md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-yellow-500/20 bg-black/95 md:hidden">
          <nav className="flex flex-col items-center gap-6 py-8">

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
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white transition hover:text-yellow-300"
              >
                {label}
              </a>
            ))}

            <div className="mt-4 flex gap-5">
              <a
                href="https://www.youtube.com/@DarbareAshrafiBetul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl text-red-500" />
              </a>

              <a
                href="https://www.facebook.com/share/192E1RyYXP/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl text-blue-500" />
              </a>

              <a
                href="https://www.instagram.com/darbar_e_ashrafi_betul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl text-pink-500" />
              </a>

              <a
                href="https://wa.me/917223021894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-3xl text-green-500" />
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}