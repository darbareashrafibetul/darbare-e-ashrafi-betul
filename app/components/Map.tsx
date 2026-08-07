"use client";

import { motion } from "framer-motion";

export default function Map() {
  return (
    <section
      id="location"
      className="bg-gradient-to-b from-black to-green-950 px-6 py-24 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-4 text-center text-5xl font-bold text-yellow-300">
          Find Us
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Visit Darbare e Ashrafi Betul and experience peace, spirituality,
          and blessings. Use the map below to get directions.
        </p>

        <div className="overflow-hidden rounded-3xl border border-yellow-500/30 shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.2471997421103!2d77.855993!3d22.0018373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd607e94c64c505%3A0x8a41b270db8c11ba!2sBABA%20MAKHDUM%20SIMNANI%20R.A.DARBAR%2C%20GHONCHI%20%2C%208th%20mile.!5e0!3m2!1sen!2sin!4v1786022358446!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

        <div className="mt-10 flex justify-center">

          <a
            href="https://maps.app.goo.gl/2kLjkWa4YLgtDBUu5?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            📍 Get Directions
          </a>

        </div>
      </motion.div>
    </section>
  );
}