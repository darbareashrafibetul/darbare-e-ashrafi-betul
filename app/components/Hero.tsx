"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image
          src="/images/logo.png"
          alt="Darbare e Ashrafi Betul Logo"
          width={170}
          height={170}
          priority
          className="mb-8 rounded-full shadow-2xl"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-3xl text-yellow-400"
      >
        وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl font-extrabold text-yellow-300 md:text-7xl"
      >
        Darbare e Ashrafi Betul
      </motion.h1>

      <p className="mt-4 text-xl text-green-200">
        Makhdoom Baba Darbar
      </p>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
        A Spiritual Center of Peace, Faith, Service and Healing.
        Thousands of devotees visit every year seeking blessings,
        spiritual guidance and inner peace.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-black transition hover:scale-105 hover:bg-yellow-300">
          Visit Khanqah
        </button>

        <button className="rounded-full border border-yellow-400 px-8 py-3 font-bold text-yellow-300 transition hover:scale-105 hover:bg-yellow-400 hover:text-black">
          Explore Darbar
        </button>
      </div>
    </section>
  );
}