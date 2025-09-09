"use client"
import CustomerReviews from '@/components/CustomerReviews'
import LandingCarousel from '../components/LandingCarousel'

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <LandingCarousel />
      <CustomerReviews />
    </div>
  )
}
