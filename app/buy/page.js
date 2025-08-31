"use client"
import PhoneCard from '../../components/PhoneCard'

const phones = [
  { id: 1, name: "iPhone 13", brand: "Apple", price: 60000, image: "/images/iphone.jpg" },
  { id: 2, name: "Samsung S21", brand: "Samsung", price: 40000, image: "/images/samsung.jpg" },
  { id: 3, name: "OnePlus 9", brand: "OnePlus", price: 35000, image: "/images/oneplus.jpg" },
]

export default function Buy() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buy Smartphones</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  )
}
