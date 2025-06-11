"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"

interface DateInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export default function DateInput({
  value = "",
  onChange,
  error,
}: DateInputProps) {
  const [date, setDate] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  const formatDate = (input: string) => {
    const numbers = input.replace(/\D/g, "")

    if (numbers.length <= 2) return numbers
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
      4,
      8
    )}`
  }

  const validateDate = (dateString: string) => {
    if (dateString.length !== 10) return false

    const [day, month, year] = dateString.split("/").map(Number)
    const date = new Date(year, month - 1, day)
    const today = new Date()

    // Check if date is valid
    if (
      date.getDate() !== day ||
      date.getMonth() !== month - 1 ||
      date.getFullYear() !== year
    ) {
      return false
    }

    // Check if date is not in the future
    if (date > today) return false

    // Check if person is not too old (reasonable age limit)
    const age = today.getFullYear() - year
    if (age > 120) return false

    return true
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value)
    setDate(formatted)
    onChange?.(formatted)
  }

  useEffect(() => {
    if (value !== date) {
      setDate(value)
    }
  }, [value])

  const isValid = date.length === 0 || date.length < 10 || validateDate(date)
  const showPlaceholder = !isFocused && date.length === 0

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            value={date}
            onChange={handleDateChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={showPlaceholder ? "Date of birth" : ""}
            maxLength={10}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
              error || (!isValid && date.length === 10) ? "border-red-500" : ""
            }`}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {!isValid && date.length === 10 && !error && (
        <p className="text-red-500 text-sm mt-1">Invalid date</p>
      )}
    </div>
  )
}
