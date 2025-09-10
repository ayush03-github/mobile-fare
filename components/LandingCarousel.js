"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const slides = [
  { id: 1, image: "/images/exchange.jpg", text: "Exchange your old smartphone for a new one" },
  { id: 2, image: "/images/samsung.jpg", text: "Buy top Samsung phones" },
  { id: 3, image: "/images/oneplus.jpg", text: "Get the latest OnePlus deals" },
]

export default function LandingCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute inset-0 w-full h-full`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image src={slide.image} alt={slide.text} fill className="object-cover" />
          </div>

          {/* Text Overlay */}
          {index === current && (
            <motion.div
              className="absolute bottom-6 left-6 max-w-lg px-4 py-2 rounded-lg"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="text-white text-2xl md:text-4xl font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slide.text}
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
      >
        ›
      </button>
    </div>
  )
}
