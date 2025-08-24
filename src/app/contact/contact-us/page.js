"use client";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3B2D]">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions about our mutual funds, pension schemes, or membership? 
            Get in touch with us — our team is here to help.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p>
              📍 <span className="font-semibold">Address:</span> MUFAP House, Karachi, Pakistan
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +92 21 111 000 000
            </p>
            <p>
              📧 <span className="font-semibold">Email:</span> info@mufap.org.pk
            </p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#1A3B2D] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#1A3B2D] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#1A3B2D] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A3B2D] text-white font-medium py-3 rounded-lg hover:bg-[#15442b] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
