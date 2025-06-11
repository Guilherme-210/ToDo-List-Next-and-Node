"use client"

import { useState, useEffect } from "react"
import { Phone, ChevronDown } from "lucide-react"
import { countries, CountryCode } from "../../../../const/PhoneInput"
import { formatPhone } from "@/utils/PhoneInput"
import CountryDropdown from "./CountryDropdown"

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
  const [country, setCountry] = useState<CountryCode>("BR")
  const [phone, setPhone] = useState(value)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value, country)
    setPhone(formatted)
    onChange?.(formatted)
  }

  const handleCountryChange = (newCountry: CountryCode) => {
    setCountry(newCountry)
    setIsDropdownOpen(false)
    const reformatted = formatPhone(phone, newCountry)
    setPhone(reformatted)
    onChange?.(reformatted)
  }

  useEffect(() => {
    setPhone((prevPhone) => {
      return value !== prevPhone ? value : prevPhone
    })
  }, [value])

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-full px-3 flex items-center space-x-2 border-r border-gray-300  focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
            >
              <span className="text-sm">{countries[country].flag}</span>
              <span className="text-sm text-gray-600">
                {countries[country].code}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            {isDropdownOpen && (
              <CountryDropdown
                onSelect={handleCountryChange}
              />
            )}
          </div>

          <div className="absolute inset-y-0 left-22 pl-3 flex items-center pointer-events-none">
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
