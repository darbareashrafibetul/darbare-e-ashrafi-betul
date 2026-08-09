"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

export default function Map() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-gradient-to-b from-black to-green-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Heading */}
        <div className="text-center">
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10">
              <FaMapMarkerAlt className="text-2xl text-yellow-300" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-yellow-300 md:text-5xl">
            Find Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Visit Darbare e Ashrafi Betul and experience peace, spirituality,
            and blessings. Use the map below to get directions.
          </p>
        </div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-3xl border border-yellow-500/20 bg-black/30 shadow-2xl backdrop-blur-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.2471997421103!2d77.855993!3d22.0018373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd607e94c64c505%3A0x8a41b270db8c11ba!2sBABA%20MAKHDUM%20SIMNANI%20R.A.DARBAR%2C%20GHONCHI%20%2C%208th%20mile.!5e0!3m2!1sen!2sin!4v1786022358446!5m2!1sen!2sin"
            title="Darbare e Ashrafi Betul Location"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>

        {/* Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://maps.app.goo.gl/2kLjkWa4YLgtDBUu5?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black shadow-lg transition duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            <FaDirections className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
            Get Directions
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}