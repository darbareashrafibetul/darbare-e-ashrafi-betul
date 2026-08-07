"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="bg-gradient-to-b from-black to-green-950 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-5xl font-bold text-yellow-300">
            Gallery
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
            Beautiful moments from Darbare e Ashrafi Betul.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer overflow-hidden rounded-2xl border border-yellow-500/30 shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 text-4xl text-white transition hover:text-red-500"
            >
              <FaTimes />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage}
                alt="Gallery Image"
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}