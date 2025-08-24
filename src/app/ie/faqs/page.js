"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/ui/Navbar";

const faqs = [
  {
    question: "What is MUFAP?",
    answer:
      "The Mutual Funds Association of Pakistan (MUFAP) is the trade body for Pakistan’s asset management industry, promoting transparency, awareness, and growth of mutual and pension funds.",
  },
  {
    question: "Who are the members of MUFAP?",
    answer:
      "Our members include Asset Management Companies, Pension Fund Managers, and Investment Advisors, all working together to advance the industry’s best practices.",
  },
  {
    question: "What role does MUFAP play?",
    answer:
      "MUFAP works to enhance financial literacy, advocate for regulatory improvements, promote investor confidence, and ensure ethical practices across the mutual fund industry.",
  },
  {
    question: "How does MUFAP protect investors?",
    answer:
      "We promote transparency, awareness of benefits and risks, fair competition, and adherence to regulatory laws, ensuring that investors can make informed financial decisions.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
   

    <section className="min-h-screen bg-white py-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
          style={{ color: "#1A3B2D" }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border rounded-xl shadow-sm bg-gray-50"
                style={{ borderColor: "#1A3B2D" }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span
                    className="text-lg font-medium"
                    style={{ color: "#1A3B2D" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "#1A3B2D" }}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-700 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
