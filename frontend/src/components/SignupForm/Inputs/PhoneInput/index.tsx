"use client"

import { useState, useEffect } from "react"
import { Phone, ChevronDown } from "lucide-react"

interface PhoneInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export default function PhoneInput({
  value = "",
  onChange,
  error,
}: PhoneInputProps) {
  const [country, setCountry] = useState<"BR" | "US">("BR")
  const [phone, setPhone] = useState(value)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const countries = {
    BR: { name: "Brasil", code: "+55", flag: "🇧🇷", format: "(##) #####-####" },
    US: {
      name: "Estados Unidos",
      code: "+1",
      flag: "🇺🇸",
      format: "(###) ###-####",
    },
  }

  const formatPhone = (input: string, countryCode: "BR" | "US") => {
    const numbers = input.replace(/\D/g, "")

    if (countryCode === "BR") {
      if (numbers.length <= 2) return `(${numbers}`
      if (numbers.length <= 7)
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7,
        11
      )}`
    } else {
      if (numbers.length <= 3) return `(${numbers}`
      if (numbers.length <= 6)
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
        6,
        10
      )}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value, country)
    setPhone(formatted)
    onChange?.(formatted)
  }

  const handleCountryChange = (newCountry: "BR" | "US") => {
    setCountry(newCountry)
    setIsDropdownOpen(false)
    const reformatted = formatPhone(phone, newCountry)
    setPhone(reformatted)
    onChange?.(reformatted)
  }

  useEffect(() => {
    if (value !== phone) {
      setPhone(value)
    }
  }, [value])

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-full px-3 flex items-center space-x-2 border-r border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
            >
              <span className="text-sm">{countries[country].flag}</span>
              <span className="text-sm text-gray-600">
                {countries[country].code}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-lg min-w-48">
                {Object.entries(countries).map(([code, info]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleCountryChange(code as "BR" | "US")}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span>{info.flag}</span>
                    <div>
                      <div className="font-medium text-sm">{info.name}</div>
                      <div className="text-xs text-gray-500">{info.code}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="absolute inset-y-0 left-20 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder={countries[country].format}
            className={`w-full pl-32 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
              error ? "border-red-500" : ""
            }`}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
