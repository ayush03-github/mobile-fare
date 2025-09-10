
import Image from "next/image"
export default function PhoneCard({ phone }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image src={phone.image} alt={phone.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{phone.name}</h2>
      <p className="text-gray-600">{phone.brand}</p>
      <p className="text-green-600 font-semibold">₹{phone.price}</p>
      <button className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Buy Now
      </button>
    </div>
  )
}
