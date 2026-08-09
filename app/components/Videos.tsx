"use client";

import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/ukzaFfklRk0",
  "https://www.youtube.com/embed/iCzfdcZL37k",
  "https://www.youtube.com/embed/OVbrz6sH1ks",
  "https://www.youtube.com/embed/BZKChc8_Ey8",
  "https://www.youtube.com/embed/fuNNnN1w4vE",
  "https://www.youtube.com/embed/m4YHm7Rnxbo",
  "https://www.youtube.com/embed/Mb_j6KQMleA",
  "https://www.youtube.com/embed/KfHt8AAsJAM",
  "https://www.youtube.com/embed/MbjYOCHUoNQ",
  "https://www.youtube.com/embed/2xxutsdOgow",
  "https://www.youtube.com/embed/6bk-s9G3NcE",
  "https://www.youtube.com/embed/fNQcUGolsSY",
  "https://www.youtube.com/embed/ksza3Dbv7Zg",
  "https://www.youtube.com/embed/CyIjI8x1bmk",
  "https://www.youtube.com/embed/X9vIKh2j1bQ",
];

export default function Videos() {
  return (
    <section
      id="videos"
      className="bg-gradient-to-b from-green-950 to-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-yellow-300">
            Videos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Watch spiritual moments and beautiful memories
            from Darbare e Ashrafi Betul.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index % 6) * 0.1,
              }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/30 shadow-xl"
            >
              <iframe
                className="aspect-video w-full"
                src={video}
                title={`Darbare e Ashrafi Betul Video ${index + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}