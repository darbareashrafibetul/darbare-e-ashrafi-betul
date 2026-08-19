import Image from "next/image";

const quickLinks = [
  { label: "Timings", href: "/timings" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

const particles = [
  { left: "8%", top: "20%" },
  { left: "18%", top: "70%" },
  { left: "30%", top: "15%" },
  { left: "72%", top: "18%" },
  { left: "84%", top: "65%" },
  { left: "92%", top: "30%" },
  { left: "12%", top: "42%" },
  { left: "65%", top: "75%" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#EAE0CC] px-4 pb-20 pt-28 text-center sm:px-6 md:pt-32"
    >
      {/* =====================================================
          LIGHTWEIGHT BACKGROUND
      ====================================================== */}

      <div
        className="absolute inset-0 -z-30 bg-gradient-to-b from-[#F3EBD8] via-[#E2D3B3] to-[#F1E7CF]"
        aria-hidden="true"
      />

      {/* Static golden atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-12%] -z-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A227]/15 blur-[70px] sm:h-[600px] sm:w-[600px]"
        aria-hidden="true"
      />

      {/* Static green atmosphere */}
      <div
        className="pointer-events-none absolute bottom-[-18%] left-1/2 -z-20 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#1F4436]/10 blur-[70px] sm:h-[550px] sm:w-[550px]"
        aria-hidden="true"
      />

      {/* Subtle luxury texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1F4436 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          STATIC PARTICLES
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rotate-45 bg-[#C9A227]/60"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          ROYAL FRAME
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-[#C9A227]/25 sm:inset-6 sm:rounded-[2rem] md:inset-10"
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-[#C9A227]/70 sm:h-12 sm:w-12" />

        <span className="absolute right-0 top-0 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-[#C9A227]/70 sm:h-12 sm:w-12" />

        <span className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-[#C9A227]/70 sm:h-12 sm:w-12" />

        <span className="absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-[#C9A227]/70 sm:h-12 sm:w-12" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">

        {/* ===================================================
            QUR'AN VERSE — FIRST
        ==================================================== */}

        <p className="animate-[fadeUp_.7s_ease-out_both] text-xl leading-relaxed text-[#8B6F1A] sm:text-2xl md:text-3xl">
          وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
        </p>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3 sm:my-7">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#8B6F1A] sm:w-20" />

          <span className="h-2 w-2 rotate-45 bg-[#C9A227]" />

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#8B6F1A] sm:w-20" />
        </div>

        {/* ===================================================
            FLOATING LOGO — UNDER VERSE
        ==================================================== */}

        <div className="relative mb-7 animate-[logoFloat_4s_ease-in-out_infinite] sm:mb-9">

          {/* Lightweight glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/20 blur-[45px] sm:h-48 sm:w-48"
            aria-hidden="true"
          />

          {/* Royal ring */}
          <div
            className="absolute -inset-3 rounded-full border border-dashed border-[#C9A227]/45"
            aria-hidden="true"
          />

          {/* Logo */}
          <div className="relative rounded-full border-2 border-[#C9A227]/70 bg-[#EFE6D0] p-2 shadow-xl shadow-[#8B6F1A]/20">
            <div className="rounded-full bg-gradient-to-br from-[#C9A227] via-[#F7EBC4] to-[#8B6F1A] p-1">
              <Image
                src="/images/logo.png"
                alt="Darbare e Ashrafi Betul Logo"
                width={150}
                height={150}
                priority
                className="h-24 w-24 rounded-full border-2 border-[#EFE6D0] object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            TITLE
        ==================================================== */}

        <h1 className="animate-[fadeUp_.8s_.1s_ease-out_both] bg-gradient-to-b from-[#D7B449] via-[#C9A227] to-[#805F0E] bg-clip-text text-4xl font-extrabold leading-[1.08] tracking-tight text-transparent sm:text-5xl md:text-7xl lg:text-[5.4rem]">
          Darbare e Ashrafi
          <br className="sm:hidden" /> Betul
        </h1>

        {/* ===================================================
            SUBTITLE
        ==================================================== */}

        <p className="animate-[fadeUp_.8s_.2s_ease-out_both] mt-4 text-base font-semibold tracking-[0.22em] text-[#1F4436] sm:mt-5 sm:text-xl md:text-2xl">
          MAKHDOOM BABA DARBAR
        </p>

        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent sm:mt-5 sm:w-32" />

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <p className="animate-[fadeUp_.8s_.3s_ease-out_both] mt-6 max-w-2xl px-3 text-[15px] leading-7 text-[#2F5D50]/90 sm:mt-8 sm:text-lg sm:leading-8">
          A Spiritual Center of Peace, Faith, Service and Healing. Thousands
          of devotees visit every year seeking blessings, spiritual guidance
          and inner peace.
        </p>

        {/* ===================================================
            BUTTONS
        ==================================================== */}

        <div className="animate-[fadeUp_.8s_.4s_ease-out_both] relative z-30 mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="/location"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#D8AE3E] via-[#C9A227] to-[#8B6F1A] px-9 py-3.5 font-bold text-[#17372C] shadow-lg shadow-[#8B6F1A]/25 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Visit Khanqah
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          <a
            href="/about"
            className="group rounded-full border-2 border-[#1F4436]/80 bg-[#EFE6D0]/40 px-9 py-3.5 font-bold text-[#1F4436] transition-all duration-200 hover:-translate-y-1 hover:bg-[#1F4436] hover:text-[#EFE6D0] active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Darbar
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </a>
        </div>

        {/* ===================================================
            QUICK LINKS
        ==================================================== */}

        <div className="animate-[fadeUp_.8s_.5s_ease-out_both] mt-10 grid w-full grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative overflow-hidden rounded-2xl border border-[#8B6F1A]/20 bg-white/40 px-4 py-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:bg-white/60 hover:shadow-lg active:scale-95"
            >
              {/* Diamond */}
              <span className="relative mb-3 block h-2 w-2 rotate-45 bg-[#C9A227]" />

              {/* Label */}
              <span className="relative text-sm font-semibold tracking-wide text-[#1F4436] sm:text-base">
                {link.label}
              </span>

              {/* Accent */}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C9A227] transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="absolute bottom-5 z-10 sm:bottom-7">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#1F4436]/40 p-1.5 sm:h-11 sm:w-7">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#1F4436]" />
        </div>
      </div>

      {/* =====================================================
          LOCAL KEYFRAMES
      ====================================================== */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}