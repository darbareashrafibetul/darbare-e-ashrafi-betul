"use client";

import { motion } from "framer-motion";

export default function PrayerTimings() {
  return (
    <section
      id="timings"
      className="bg-gradient-to-b from-green-950 to-black px-6 py-24 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-4 text-center text-5xl font-bold text-yellow-300">
          Darbar Timings
        </h2>

        <p className="mb-12 text-center text-gray-300">
          Visiting and Dua timings at Darbare e Ashrafi Betul.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-yellow-500/30 bg-black/30 p-8">
            <h3 className="mb-4 text-2xl font-bold text-yellow-300">
              🌅 Morning
            </h3>

            <p className="text-gray-300">
              Darbar Open:
              <br />
              Fajr ke baad se 11:00 AM
            </p>

            <p className="mt-4 text-gray-300">
              Mulakat:
              <br />
              10:00 AM – 11:00 AM
            </p>

            <p className="mt-4 text-red-300">
              Friday Morning Closed
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/30 bg-black/30 p-8">
            <h3 className="mb-4 text-2xl font-bold text-yellow-300">
              🌙 Evening
            </h3>

            <p className="text-gray-300">
              Darbar Open:
              <br />
              5:00 PM – 8:00 PM
            </p>

            <p className="mt-4 text-gray-300">
              Dua & Chirag Sharif:
              <br />
              6:00 PM – 8:00 PM
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}