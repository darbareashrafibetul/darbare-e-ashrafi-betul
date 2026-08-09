"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const contactItems = [
  {
    title: "Address",
    icon: FaMapMarkerAlt,
    content: (
      <>
        Darbare e Ashrafi Betul
        <br />
        Betul, Madhya Pradesh
      </>
    ),
    href: "/location",
  },
  {
    title: "Phone",
    icon: FaPhoneAlt,
    content: "+91 72230 21894",
    href: "tel:+917223021894",
  },
  {
    title: "Email",
    icon: FaEnvelope,
    content: "info@darbareashrafibetul.com",
    href: "mailto:info@darbareashrafibetul.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-black px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-6xl -translate-y-2"
      >
        {/* Glass Container */}
        <div className="rounded-[2rem] border border-yellow-400/20 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-10 md:p-14">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-400/10 shadow-lg shadow-yellow-500/10"
            >
              <FaPhoneAlt className="text-2xl text-yellow-300" />
            </motion.div>

            <h2 className="text-4xl font-extrabold tracking-tight text-yellow-300 sm:text-5xl md:text-6xl">
              Contact Us
            </h2>

            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Feel free to visit Darbare e Ashrafi Betul or contact us for
              spiritual guidance, information, and assistance.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group rounded-3xl border border-yellow-400/20 bg-black/20 p-8 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/[0.06] hover:shadow-yellow-500/10"
                >
                  {/* Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400/20">
                    <Icon className="text-2xl text-yellow-300" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold text-yellow-300">
                    {item.title}
                  </h3>

                  <div className="mx-auto mt-3 h-px w-12 bg-yellow-400/40" />

                  {/* Content */}
                  <p className="mt-5 break-words text-sm leading-7 text-gray-300 sm:text-base">
                    {item.content}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Bottom Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-12 max-w-2xl rounded-2xl border border-yellow-400/15 bg-black/20 px-6 py-5 text-center backdrop-blur-sm"
          >
            <p className="text-sm leading-6 text-gray-300 sm:text-base">
              We warmly welcome you to visit{" "}
              <span className="font-semibold text-yellow-300">
                Darbare e Ashrafi Betul
              </span>
              .
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Spacing */}
      <div className="h-6" />
    </section>
  );
}