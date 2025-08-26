"use client";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, Target, Compass } from "lucide-react";

export default function VisionMission() {
  return (
    <>
      <section className="relative bg-white py-20 px-6 md:px-20 lg:px-32 text-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide text-green-900"
          >
            Vision & Mission
          </motion.h2>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-green-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <Compass className="text-green-700 w-8 h-8" />
                <h3 className="text-2xl font-semibold text-green-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To have collective investment schemes as the preferred investment solution 
                for investors and financial intermediaries.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-green-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-green-700 w-8 h-8" />
                <h3 className="text-2xl font-semibold text-green-900">Mission</h3>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Contributing to a strong national economy by encouraging savings.</li>
                <li>Encouraging adherence to high ethical standards by all participants.</li>
                <li>Improving the regulatory framework for the industry.</li>
                <li>Advancing the interest of funds and fund managers.</li>
                <li>Promoting public understanding of mutual & pension funds.</li>
              </ul>
            </motion.div>
          </div>

          {/* Objectives */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10 text-green-900"
          >
            Objectives
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Assist in development of a sustainable regulatory framework for the asset management industry.",
              "Protecting and promoting the public interest in the mutual fund industry.",
              "Supporting the enforcement of regulatory law in its true spirit.",
              "Promoting fair competition in the provision of mutual fund services.",
              "Creating awareness about the benefits and risks of investing in mutual & pension funds.",
              "Providing information, assistance, and services to its members.",
              "Conducting effective training, examinations, and certifications for members and investors."
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-gray-50 border-l-4 border-green-700 rounded-xl p-5 hover:shadow-md transition-all"
              >
                <CheckCircle className="text-green-700 w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
