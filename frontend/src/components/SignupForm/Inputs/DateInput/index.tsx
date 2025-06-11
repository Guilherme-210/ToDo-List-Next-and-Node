"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { DateInputProps } from "@/interface/InputsSignup"
import { formatDate, validateDate } from "@/utils/DateInput"

export default function DateInput({
  value = "",
  onChange,
  error,
}: DateInputProps) {
  const [date, setDate] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value)
    setDate(formatted)
    onChange?.(formatted)
  }

  useEffect(() => {
    setDate((prevDate) => (value !== prevDate ? value : prevDate))
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
