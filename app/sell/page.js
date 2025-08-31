"use client"
import { useState } from "react"

export default function Sell() {
  const [imei, setImei] = useState("")
  const [quote, setQuote] = useState(null)

  const handleCheck = () => {
    if (imei.length === 15) {
      setQuote("₹15,000 (example quote)")
    } else {
      setQuote("Invalid IMEI, please enter 15 digits")
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sell Your Phone</h1>
      <input
        type="text"
        placeholder="Enter IMEI"
        value={imei}
        onChange={(e) => setImei(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <button
        onClick={handleCheck}
        className="ml-3 bg-green-500 text-white px-4 py-2 rounded"
      >
        Get Quote
      </button>
      {quote && <p className="mt-4">{quote}</p>}
    </div>
  )
}
