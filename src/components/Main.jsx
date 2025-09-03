"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import main1 from "../assets/main.jpg"
import main2 from "../assets/main2.avif"
import main3 from "../assets/main3.avif"
import { motion, AnimatePresence } from 'framer-motion'
import { FaChartLine, FaPiggyBank, FaExchangeAlt, FaChartBar, FaCalculator } from 'react-icons/fa'

const Main = () => {
  const slides = [
    {
      image: main1,
      alt: "graph",
      heading: "Mutual Funds Association Of Pakistan",
      subheading: "Welcome To"
    },
    {
      image: main2,
      alt: "Investment growth chart",
      heading: "Empowering Investors Nationwide",
      subheading: "Your Gateway To Smart Investments"
    },
    {
      image: main3,
      alt: "Financial advisory team",
      heading: "Trusted By The Financial Industry",
      subheading: "Building Confidence Together"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeNav, setActiveNav] = useState(null);
  const [tappedItem, setTappedItem] = useState(null);

  const handlebuttonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const textVariants = {
    enter: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const navItems = [
    { 
      name: "Mutual Fund", 
      icon: <FaChartLine size={18} />,
    },
    { 
      name: "Voluntary Pension", 
      icon: <FaPiggyBank size={18} />,
    },
    { 
      name: "ETFs", 
      icon: <FaExchangeAlt size={18} />,
    },
    { 
      name: "NAVs", 
      icon: <FaChartBar size={18} />,
    },
    { 
      name: "Calculator", 
      icon: <FaCalculator size={18} />,
    }
  ];

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-lora">
        {/* Background images with fade animation */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={slides[currentIndex].image} 
              fill
              className="object-cover brightness-50"
              alt={slides[currentIndex].alt}
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Text content with coordinated animation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2 items-center"
            >
              <motion.section>
                <p className='text-white opacity-90 text-center text-sm sm:text-base md:text-lg lg:text-xl mb-2 px-2'>
                  {slides[currentIndex].subheading}
                </p>
              </motion.section>
              <motion.section>
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center px-4 mb-4 md:mb-6 lg:mb-8 leading-tight">
                  {slides[currentIndex].heading}
                </h1>
              </motion.section>
              <section className='flex gap-3 sm:gap-4 md:gap-5 mt-4 md:mt-5'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlebuttonClick("about")} 
                  className='px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white font-semibold rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-white/30'
                >
                  About Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlebuttonClick("tarrif")} 
                  className='px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r text-white from-green-700 to-emerald-600 font-semibold rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:bg-white/10'
                >
                  Contact Us
                </motion.button>
              </section>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>  

      {/* Modern Navigation Design */}
      <section className="relative z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-evenly items-center space-x-8 py-4">
            {navItems.map((item, idx) => (
              <motion.div 
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveNav(idx)}
                onMouseLeave={() => setActiveNav(null)}
              >
                <motion.button
                  className={`flex flex-col items-center px-4 py-3 transition-all duration-300 ${
                    activeNav === idx 
                      ? 'text-emerald-600' 
                      : 'text-gray-600 hover:text-emerald-500'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <div className={`p-2 rounded-full mb-2 transition-colors ${
                    activeNav === idx ? 'bg-emerald-100' : 'bg-gray-100'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>
                </motion.button>
                
                {/* Active indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeNav === idx ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced Mobile Navigation - Always Visible */}
          <div className="md:hidden py-3">
            <div className="flex justify-between px-1 w-full">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center px-1 flex-1 relative"
                  whileTap={{ scale: 0.95 }}
                  onTapStart={() => setTappedItem(idx)}
                  onTap={() => setTappedItem(null)}
                  onTapCancel={() => setTappedItem(null)}
                >
                  <motion.button
                    className={`flex flex-col items-center w-full py-2 rounded-lg ${
                      tappedItem === idx ? 'bg-emerald-50' : 'bg-transparent'
                    }`}
                  >
                    <motion.div 
                      className={`p-2 rounded-full mb-1 ${
                        tappedItem === idx ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-xs font-medium text-gray-700 whitespace-nowrap text-center px-1">
                      {item.name.split(' ')[0]}
                    </span>
                  </motion.button>
                  
                  {/* Active indicator animation similar to desktop */}
                  <motion.div 
                    className="absolute bottom-0 left-2 right-2 h-1 bg-emerald-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: tappedItem === idx ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Horizontal separator */}
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full mt-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </div>
        </div>
        
        {/* Subtle separator lineesS */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full"></div>
      </section>
    </>
  )
}

export default Main