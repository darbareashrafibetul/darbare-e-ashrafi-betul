"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  ["/", "Home"],
  ["/about", "About"],
  ["/gallery", "Gallery"],
  ["/history", "History"],
  ["/videos", "Videos"],
  ["/timings", "Timings"],
  ["/location", "Location"],
  ["/contact", "Contact"],
] as const;

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    href: "https://www.youtube.com/@DarbareAshrafiBetul",
    label: "YouTube",
    icon: FaYoutube,
    color: "text-red-400",
  },
  {
    href: "https://www.facebook.com/share/192E1RyYXP/",
    label: "Facebook",
    icon: FaFacebook,
    color: "text-blue-400",
  },
  {
    href: "https://www.instagram.com/darbar_e_ashrafi_betul",
    label: "Instagram",
    icon: FaInstagram,
    color: "text-pink-400",
  },
  {
    href: "https://wa.me/917223021894",
    label: "WhatsApp",
    icon: FaWhatsapp,
    color: "text-green-400",
  },
];

/* =========================================================
   MOBILE DRAWER ANIMATION

   No "variants" object is used here.
   This completely avoids the TypeScript easing error.
========================================================= */

const drawerTransition = {
  duration: 0.55,
  ease: "easeOut" as const,
};

const drawerExitTransition = {
  duration: 0.4,
  ease: "easeIn" as const,
};

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     SCROLL STATE
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MENU ON ROUTE CHANGE
  ========================================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* =========================================================
     LOCK BODY SCROLL WHEN MENU IS OPEN
  ========================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================================
     ACTIVE LINK
  ========================================================== */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "px-2 pt-2 sm:px-4 sm:pt-3"
            : ""
        }`}
      >
        <div
          className={`relative mx-auto overflow-hidden border-b border-[#C9A227]/30 bg-[#173F31] transition-all duration-500 ${
            scrolled
              ? "max-w-[1380px] rounded-2xl border shadow-2xl shadow-black/25"
              : "w-full"
          }`}
        >
          {/* =================================================
              TOP GOLD LIGHT
          ================================================== */}

          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-0 top-0 h-px w-[35%] bg-gradient-to-r from-transparent via-[#E5C45A] to-transparent"
          />

          {/* =================================================
              LEFT AMBIENT LIGHT
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.08, 0.18, 0.08],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[-100px] top-[-120px] h-64 w-64 rounded-full bg-[#C9A227] blur-[100px]"
          />

          {/* =================================================
              RIGHT AMBIENT LIGHT
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.05, 0.12, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="pointer-events-none absolute right-[-100px] top-[-120px] h-64 w-64 rounded-full bg-[#DDBA49] blur-[100px]"
          />

          {/* =================================================
              MAIN BAR
          ================================================== */}

          <div
            className={`relative mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
              scrolled ? "py-2.5" : "py-3"
            }`}
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group relative flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              {/* Logo aura */}

              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-7 top-1/2 -z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/30 blur-xl"
              />

              {/* Logo */}

              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                className="relative shrink-0 rounded-full border border-[#D6B343]/70 bg-[#F2E7CC] p-1 shadow-lg shadow-black/20"
              >
                <div className="rounded-full bg-gradient-to-br from-[#E2C45A] via-[#F7EBC4] to-[#9C7815] p-[2px]">
                  <Image
                    src="/images/logo.png"
                    alt="Darbare e Ashrafi Betul Logo"
                    width={55}
                    height={55}
                    priority
                    className={`rounded-full object-cover transition-all duration-500 ${
                      scrolled
                        ? "h-10 w-10 sm:h-11 sm:w-11"
                        : "h-11 w-11 sm:h-12 sm:w-12"
                    }`}
                  />
                </div>
              </motion.div>

              {/* Brand */}

              <div className="min-w-0">
                <h1 className="truncate bg-gradient-to-r from-[#F0D16A] via-[#D9B94B] to-[#A98522] bg-clip-text text-[13px] font-extrabold leading-tight text-transparent sm:text-base md:text-lg">
                  Darbare e Ashrafi Betul
                </h1>

                <p className="mt-0.5 truncate text-[8px] font-medium tracking-[0.18em] text-[#E5E0C9]/75 sm:text-[10px] md:text-xs">
                  MAKHDOOM BABA DARBAR
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center lg:flex">
              {navigation.map(([href, label], index) => {
                const active = isActive(href);

                return (
                  <Link
                    key={label}
                    href={href}
                    className="group relative px-2.5 py-3 xl:px-3"
                  >
                    {/* Label */}

                    <span
                      className={`relative z-10 text-[13px] font-semibold transition-colors duration-300 xl:text-sm ${
                        active
                          ? "text-[#E5C45A]"
                          : "text-[#F4F0DF]/80 group-hover:text-[#E5C45A]"
                      }`}
                    >
                      {label}
                    </span>

                    {/* Active background */}

                    {active && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-x-1 bottom-1 h-8 rounded-full bg-[#C9A227]/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Gold underline */}

                    <motion.span
                      className="absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#9B7515] via-[#E5C45A] to-[#9B7515]"
                      animate={{
                        width: active ? 18 : 0,
                      }}
                      whileHover={{
                        width: 20,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    />

                    {/* Tiny number */}

                    <span className="pointer-events-none absolute -top-0.5 right-1 text-[7px] font-bold text-[#C9A227]/0 transition-all duration-300 group-hover:text-[#C9A227]/40">
                      0{index + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP SOCIAL ICONS
            ================================================== */}

            <div className="hidden items-center gap-1.5 xl:flex">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -3,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#D4B64D]/20 bg-white/[0.06] transition-all duration-300 hover:border-[#D4B64D]/50 hover:bg-white/[0.12]"
                  >
                    <span className="absolute inset-0 scale-0 rounded-full bg-[#C9A227]/15 transition-transform duration-500 group-hover:scale-100" />

                    <Icon
                      className={`relative z-10 text-[16px] transition-transform duration-300 group-hover:scale-110 ${social.color}`}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <motion.button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{
                scale: 0.88,
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative z-[70] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4B64D]/35 bg-white/[0.06] text-[#E5C45A] backdrop-blur-md transition-all duration-300 hover:border-[#D4B64D]/70 hover:bg-[#C9A227]/10 lg:hidden"
            >
              {/* Button glow */}

              <motion.span
                animate={{
                  scale: menuOpen ? 1 : 0,
                  opacity: menuOpen ? 1 : 0,
                }}
                className="absolute inset-1 rounded-full bg-[#C9A227]/10 blur-md"
              />

              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <FaTimes className="relative z-10 text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <FaBars className="relative z-10 text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE BACKDROP
          
          Right side will become blurred/dark when drawer opens.
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration: 0.45,
            }}
            className="fixed inset-0 z-[55] bg-[#061A13]/55 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          FULL SCREEN MOBILE DRAWER
          
          Slides in from LEFT.
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={drawerTransition}
            className="fixed inset-y-0 left-0 z-[60] flex h-dvh w-[88%] max-w-[430px] flex-col overflow-hidden border-r border-[#C9A227]/25 bg-[#12382B] shadow-[20px_0_60px_rgba(0,0,0,0.35)] lg:hidden"
          >
            {/* =================================================
                DRAWER BACKGROUND LIGHT
            ================================================== */}

            <motion.div
              animate={{
                opacity: [0.08, 0.18, 0.08],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#C9A227] blur-[100px]"
            />

            <motion.div
              animate={{
                opacity: [0.04, 0.1, 0.04],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-[#DDBA49] blur-[100px]"
            />

            {/* =================================================
                TOP GOLD LINE
            ================================================== */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-[#9B7515] via-[#E5C45A] to-transparent"
            />

            {/* =================================================
                DRAWER HEADER
            ================================================== */}

            <div className="relative flex shrink-0 items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.45,
                  }}
                  className="rounded-full border border-[#D6B343]/60 bg-[#F2E7CC] p-1"
                >
                  <div className="rounded-full bg-gradient-to-br from-[#E2C45A] via-[#F7EBC4] to-[#9C7815] p-[2px]">
                    <Image
                      src="/images/logo.png"
                      alt="Darbare e Ashrafi Betul Logo"
                      width={42}
                      height={42}
                      priority
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.22,
                    duration: 0.45,
                  }}
                >
                  <p className="text-[13px] font-bold text-[#E5C45A]">
                    Darbare e Ashrafi
                  </p>

                  <p className="mt-0.5 text-[8px] tracking-[0.18em] text-[#E5E0C9]/60">
                    BETUL • MADHYA PRADESH
                  </p>
                </motion.div>
              </Link>

              {/* Drawer close */}

              <motion.button
                type="button"
                onClick={() => setMenuOpen(false)}
                whileTap={{
                  scale: 0.85,
                }}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B64D]/25 bg-white/[0.05] text-[#E5C45A] transition-colors duration-300 hover:border-[#D4B64D]/60 hover:bg-[#C9A227]/10"
              >
                <FaTimes className="text-lg" />
              </motion.button>
            </div>

            {/* =================================================
                DRAWER CONTENT
            ================================================== */}

            <div className="relative flex-1 overflow-y-auto overscroll-contain px-5 py-6">
              {/* Section title */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.22,
                  duration: 0.45,
                }}
                className="mb-5"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C9A227]">
                  Explore
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-[#F5F0DF]">
                    Navigation
                  </h2>

                  <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/40 to-transparent" />
                </div>
              </motion.div>

              {/* =================================================
                  NAVIGATION LINKS
              ================================================== */}

              <nav className="space-y-1">
                {navigation.map(([href, label], index) => {
                  const active = isActive(href);

                  return (
                    <motion.div
                      key={label}
                      initial={{
                        opacity: 0,
                        x: -35,
                        filter: "blur(6px)",
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        delay: 0.26 + index * 0.055,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={`group relative flex min-h-[54px] items-center justify-between overflow-hidden rounded-xl px-4 transition-all duration-300 ${
                          active
                            ? "border border-[#C9A227]/20 bg-[#C9A227]/10"
                            : "border border-transparent hover:border-[#C9A227]/15 hover:bg-white/[0.035]"
                        }`}
                      >
                        {/* Active glow */}

                        {active && (
                          <motion.span
                            layoutId="mobile-active"
                            className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-[#E5C45A] to-[#9B7515]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        {/* Left */}

                        <div className="flex items-center gap-4">
                          {/* Number */}

                          <span
                            className={`w-5 text-[9px] font-bold tracking-widest ${
                              active
                                ? "text-[#C9A227]"
                                : "text-white/25"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Diamond */}

                          <motion.span
                            animate={
                              active
                                ? {
                                    rotate: [45, 135, 45],
                                    scale: [1, 1.15, 1],
                                  }
                                : {
                                    rotate: 45,
                                  }
                            }
                            transition={{
                              duration: 3,
                              repeat: active ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                            className={`h-1.5 w-1.5 shrink-0 ${
                              active
                                ? "bg-[#E5C45A]"
                                : "bg-white/25 group-hover:bg-[#C9A227]/70"
                            }`}
                          />

                          {/* Label */}

                          <span
                            className={`text-[15px] font-medium tracking-wide transition-all duration-300 ${
                              active
                                ? "translate-x-1 text-[#E7C75B]"
                                : "text-white/80 group-hover:translate-x-1 group-hover:text-[#E7C75B]"
                            }`}
                          >
                            {label}
                          </span>
                        </div>

                        {/* Arrow */}

                        <motion.span
                          animate={{
                            x: active ? 0 : -5,
                            opacity: active ? 1 : 0.25,
                          }}
                          whileHover={{
                            x: 2,
                            opacity: 1,
                          }}
                          className={`text-base ${
                            active
                              ? "text-[#C9A227]"
                              : "text-white/30"
                          }`}
                        >
                          →
                        </motion.span>

                        {/* Hover shine */}

                        <span className="pointer-events-none absolute inset-y-0 left-[-100%] w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-all duration-700 group-hover:left-[120%]" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* =================================================
                  SOCIAL CONNECT
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.75,
                  duration: 0.5,
                }}
                className="mt-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A227]/30" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]/75">
                    Connect
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A227]/30" />
                </div>

                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        initial={{
                          opacity: 0,
                          scale: 0.6,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.78 + index * 0.07,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.9,
                        }}
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/20 bg-white/[0.05] backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/10"
                      >
                        <Icon
                          className={`text-lg transition-transform duration-300 group-hover:scale-110 ${social.color}`}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* =================================================
                  BOTTOM ORNAMENT
              ================================================== */}

              <motion.div
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleX: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 0.7,
                }}
                className="mx-auto mt-8 flex max-w-[190px] items-center gap-2"
              >
                <span className="h-px flex-1 bg-[#C9A227]/20" />

                <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]/60" />

                <span className="h-px flex-1 bg-[#C9A227]/20" />
              </motion.div>
            </div>

            {/* =================================================
                DRAWER BOTTOM
            ================================================== */}

            <div className="relative shrink-0 border-t border-white/[0.06] px-5 py-3">
              <p className="text-center text-[8px] tracking-[0.22em] text-white/25">
                MAKHDOOM BABA DARBAR • BETUL
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}