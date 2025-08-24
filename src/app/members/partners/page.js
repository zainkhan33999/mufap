"use client";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Atlas Asset Management",
    description: "One of Pakistan’s leading asset managers offering innovative mutual fund solutions.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "HBL Asset Management",
    description: "Providing investment solutions and savings products for a secure financial future.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "UBL Fund Managers",
    description: "Specializing in Islamic and conventional funds to cater to diverse investor needs.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "MCB Arif Habib Investments",
    description: "Promoting financial independence through mutual funds and pension schemes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Partners() {
  return (
    <section className="bg-[#1A3B2D] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Our Trusted Partners
        </motion.h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-14 text-lg">
          We collaborate with Pakistan’s top Asset Management Companies to ensure transparency, 
          trust, and growth opportunities for investors.
        </p>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="h-32 w-full overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-[#1A3B2D]">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
