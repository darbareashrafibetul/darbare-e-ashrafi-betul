"use client";

import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/3L07PPAr6Bw",
  "https://www.youtube.com/embed/gIG3sOq9kqI",
  "https://www.youtube.com/embed/SkaabIffPxI",
];

export default function Videos() {
  return (
    <section
      id="videos"
      className="bg-gradient-to-b from-green-950 to-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center text-5xl font-bold text-yellow-300"
        >
          Videos
        </motion.h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Watch spiritual moments and beautiful memories from Darbare e Ashrafi Betul.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl border border-yellow-500/30 shadow-xl"
            >
              <iframe
                className="aspect-video w-full"
                src={video}
                title={`Video ${index + 1}`}
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