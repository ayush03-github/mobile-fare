"use client"
import CustomerReviews from '@/components/CustomerReviews'
import LandingCarousel from '../components/LandingCarousel'
import Loader from '@/components/Loader'

export default function Home() {
  return (
    <>
    <Loader />
    <div className='bg-white text-black'>
      <LandingCarousel />
      <CustomerReviews />
    </div>
    </>
    
  )
}
