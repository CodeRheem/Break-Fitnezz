import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative font-poppins bg-black text-white flex flex-col items-center justify-center h-70" id="contactUs">
      {/* Blurred hero background (behind content) */}
      <div
        className="absolute inset-0 bg-cover bg-center filter scale-100 rounded-3xl opacity-50 bg-black "
        style={{
          backgroundImage:
            "url('/victor-freitas-WvDYdXDzkhs-unsplash.jpg')",
        }}
        aria-hidden="true"
      />
      {/* dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content (kept above the blurred background) */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-4 text-center"
        >
          Get in Touch with Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full md:w-3/4 text-center text-gray-200 mb-8 leading-relaxed"
        >
          We'd love to hear from you! Whether you have questions about our
          memberships, classes, or anything else, our team is here to help. Reach
          out to us and we’ll get back to you as soon as possible.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-xl shadow-xl w-full sm:w-auto"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-3 rounded-lg sm:rounded-none sm:rounded-l-lg border text-gray-800 border-gray-300 w-full sm:w-80 focus:ring-2 focus:ring-green-600 outline-none"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-green-600 rounded-lg sm:rounded-none sm:rounded-r-lg text-white font-semibold uppercase tracking-wide hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
