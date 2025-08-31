"use client"
import LandingCarousel from '../components/LandingCarousel'

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <LandingCarousel />
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">Welcome to Cashify Clone</h2>
        <p className="mt-2">Buy & Sell your smartphones instantly</p>
      </section>
    </div>
  )
}
