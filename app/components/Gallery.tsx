"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const images = Array.from(
  { length: 15 },
  (_, index) => `/images/gallery${index + 1}.jpg`
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="bg-gradient-to-b from-black to-green-950 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Gallery Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-yellow-300">
              Gallery
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Beautiful moments and memories from Darbare e Ashrafi Betul.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, index) => (
              <motion.button
                key={img}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 6) * 0.08,
                }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(img)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/30 text-left shadow-xl"
                aria-label={`Open gallery image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={`Darbare e Ashrafi Betul Gallery ${index + 1}`}
                  width={800}
                  height={550}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-red-500"
            >
              <FaTimes />
            </button>

            {/* Large Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] max-w-[95vw]"
            >
              <Image
                src={selectedImage}
                alt="Darbare e Ashrafi Betul Gallery"
                width={1400}
                height={900}
                className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}