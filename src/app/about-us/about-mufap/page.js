"use client";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <section className="relative bg-white py-20 px-6 md:px-20 lg:px-32 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-green-900"
          >
            About MUFAP
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16"
          >
            The{" "}
            <span className="font-semibold text-green-800">
              Mutual Funds Association of Pakistan (MUFAP)
            </span>{" "}
            represents Pakistan’s asset management industry. Established in 1996
            and incorporated in 2001, MUFAP is the voice of the sector, ensuring
            growth, credibility, and trust for both investors and stakeholders.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* History */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-green-700 shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Our History
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Formed by investment advisors and asset managers, MUFAP gained
                recognition from the Ministry of Commerce in 2001. Since then,
                it has stood as the trade association driving the evolution of
                Pakistan’s mutual fund industry.
              </p>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-green-700 shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Our Role
              </h3>
              <p className="text-gray-600 leading-relaxed">
                MUFAP strengthens mutual funds and voluntary pension schemes as
                reliable investment solutions. We strive to build financial
                literacy and confidence among investors through education and
                advocacy.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-green-700 shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Guided by integrity, transparency, and accountability, MUFAP
                sets high ethical benchmarks. Our commitment ensures sustainable
                industry growth and investor protection.
              </p>
            </motion.div>

            {/* Membership */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-l-4 border-green-700 shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Our Members
              </h3>
              <p className="text-gray-600 leading-relaxed">
                MUFAP unites Asset Management Companies, Pension Fund Managers,
                and Investment Advisors, creating a collaborative ecosystem that
                fosters innovation and excellence in financial services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
