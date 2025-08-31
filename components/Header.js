"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-gray-800 shadow-md z-50 h-16 md:h-20">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:text-black">
          SN
        </Link>

        {/* Desktop/Tablet Nav */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link href="/buy" className="hover:text-green-500">Buy Phones</Link>
          <Link href="/sell" className="hover:text-green-500">Sell Phones</Link>
          <Link href="/about" className="hover:text-green-500">About</Link>
          <Link href="/contact" className="hover:text-green-500">Contact</Link>
        </nav>

        {/* Mobile Hamburger with sharp animation */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute h-0.5 w-7 bg-white rounded transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-7 bg-white rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-7 bg-white rounded transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Nav Drawer with slide-down */}
      <div
        className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 py-3 px-4" : "max-h-0"
        }`}
      >
        <Link href="/buy" className="block py-2 hover:text-green-500">Buy Phones</Link>
        <Link href="/sell" className="block py-2 hover:text-green-500">Sell Phones</Link>
        <Link href="/about" className="block py-2 hover:text-green-500">About</Link>
        <Link href="/contact" className="block py-2 hover:text-green-500">Contact</Link>
      </div>
    </header>
  )
}
