"use client";

import { motion } from "framer-motion";
import {
  FaMosque,
  FaHandsHelping,
  FaHeart,
} from "react-icons/fa";

export default function History() {
  const cards = [
    {
      icon: <FaMosque className="text-5xl text-yellow-400" />,
      title: "Establishment",
      text: "Darbare e Ashrafi Betul is a sacred spiritual center where devotees have gathered for years to seek blessings, guidance and inner peace.",
    },
    {
      icon: <FaHandsHelping className="text-5xl text-green-400" />,
      title: "Spiritual Legacy",
      text: "The Darbar continues the beautiful tradition of serving humanity with love, faith, devotion and respect for every visitor.",
    },
    {
      icon: <FaHeart className="text-5xl text-red-400" />,
      title: "Our Mission",
      text: "To spread peace, spirituality, humanity and the teachings of our elders while welcoming everyone with compassion and respect.",
    },
  ];

  return (
    <section
      id="history"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center text-5xl font-bold text-yellow-300"
        >
          Our History
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center text-lg text-gray-300"
        >
          A place where faith, peace and humanity come together under the
          blessings of Makhdoom Baba.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-green-900/40 to-black/40 p-8 text-center shadow-xl transition-all"
            >
              <div className="mb-6 flex justify-center">
                {card.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-yellow-300">
                {card.title}
              </h3>

              <p className="leading-8 text-gray-300">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}