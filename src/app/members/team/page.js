"use client";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ahmed Khan",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bilal Ahmed",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Usman Ali",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Faisal Khan",
    role: "Head of Compliance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export default function Team() {
  return (
    <>
   
    <section className="bg-[#1A3B2D] h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
          Meet Our Team
        </motion.h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-14 text-lg">
          MUFAP is powered by experienced professionals dedicated to building 
          a transparent, ethical, and thriving mutual fund industry in Pakistan.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/40 shadow-md hover:shadow-xl transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
              </>
  );
}
