"use client";
import { motion } from "framer-motion";
import team1 from "../../../../public/team1.jpg";
import Image from "next/image";
const teams = [
  {
    name: "Mr. Shiraz Ahmed",
    role: "Senior Research Analyst",
    image: team1, 
  },
    {
    name: "Mr. Shiraz Ahmed",
    role: "Senior Research Analyst",
    image: team1, 
  },
  {
    name: "Mr. Shiraz Ahmed",
    role: "Senior Research Analyst",
    image: team1, 
  },  
  {
    name: "Mr. Shiraz Ahmed",
    role: "Senior Research Analyst",
    image: team1, 
  }, 

];

export default function Team() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-green-900 mb-6"
        >
          Meet Our Team
        </motion.h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          MUFAP is powered by experienced professionals dedicated to building 
          a transparent, ethical, and thriving mutual fund industry in Pakistan.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teams.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              {/* Profile Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-700 shadow-md hover:shadow-lg transition">
                <Image
                  priority
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-4 text-lg font-semibold text-green-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}