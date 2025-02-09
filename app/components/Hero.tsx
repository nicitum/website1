"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Build.Thrive!"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 150)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section className="bg-white text-[#003366] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
              className="inline-block w-1 h-10 bg-[#003366] ml-1"
            />
          </h1>
          <p className="text-xl mb-8">
            With over two decades of expertise, we deliver cutting-edge software solutions to propel your business into
            the future of technology.
          </p>
          <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center" // Centering
    >
      <button
        onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-[#003366] hover:bg-[#00509e] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 flex items-center justify-center"
      >
        Explore Our Solutions
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </motion.div>
        </div>
      </div>
    </section>
  )
}

