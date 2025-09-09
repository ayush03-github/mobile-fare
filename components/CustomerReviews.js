"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    phone: "iPhone 13",
    review: "Great experience selling my old iPhone. Got instant payment!",
    image: "/images/customer1.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    phone: "Samsung Galaxy S22",
    review: "Buying a phone was super easy and smooth.",
    image: "/images/customer2.jpg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    phone: "OnePlus 9 Pro",
    review: "Fast pickup and very fair price for my old device.",
    image: "/images/customer3.jpg",
  },
]

export default function CustomerReviews() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          What Our Customers Say
        </h2>

        {/* Desktop / Tablet Grid */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.id} {...r} />
            ))}
          </div>
        )}

        {/* Mobile */}
        {isMobile && (
          <div>
            <AnimatePresence mode="wait">
              {!showAll ? (
                <motion.div
                  key="single"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex justify-center"
                >
                  <ReviewCard {...reviews[0]} />
                </motion.div>
              ) : (
                <motion.div
                  key="carousel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 scrollbar-hide"
                >
                  {reviews.map((r) => (
                    <motion.div
                      key={r.id}
                      whileHover={{ scale: 1.03 }}
                      className="flex-shrink-0 w-3/4 snap-center"
                    >
                      <ReviewCard {...r} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Buttons */}
            <div className="mt-6">
              {!showAll ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-bold rounded-full shadow-lg animate-bounce"
                >
                  👀 See More Reviews
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowAll(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-bold rounded-full shadow-lg"
                >
                  🔒 Hide Reviews
                </motion.button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* Review Card */
function ReviewCard({ name, phone, review, image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative aspect-[3/4]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-10">
            <p className="text-white text-sm sm:text-base italic">"{review}"</p>
            <p className="mt-2 text-yellow-300 text-sm sm:text-base font-semibold">
              {phone}
            </p>
            <p className="mt-1 text-gray-200 text-xs sm:text-sm font-bold">— {name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
