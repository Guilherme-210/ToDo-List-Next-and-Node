"use client"

import { useState } from "react"
import { User } from "lucide-react"

interface NameInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
}

export default function NameInput({
  value,
  onChange,
  error,
  placeholder = "Nome completo",
}: NameInputProps) {
  const [internalError, setInternalError] = useState<string>("")
  const [touched, setTouched] = useState(false)

  // Validation function
  const validateName = (name: string): string => {
    if (!name.trim()) {
      return "Nome é obrigatório"
    }

    if (name.trim().length < 2) {
      return "Nome deve ter pelo menos 2 caracteres"
    }

    if (name.trim().length > 100) {
      return "Nome deve ter no máximo 100 caracteres"
    }

    // Check if contains at least one space (first and last name)
    const nameParts = name
      .trim()
      .split(" ")
      .filter((part) => part.length > 0)
    if (nameParts.length < 2) {
      return "Digite o nome completo (nome e sobrenome)"
    }

    // Check for invalid characters (only letters, spaces, hyphens, and apostrophes)
    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/
    if (!nameRegex.test(name)) {
      return "Nome deve conter apenas letras, espaços, hífens e apostrofes"
    }

    // Check if each part has at least 2 characters
    const invalidParts = nameParts.filter((part) => part.length < 2)
    if (invalidParts.length > 0) {
      return "Cada parte do nome deve ter pelo menos 2 caracteres"
    }

    return ""
  }

  // Format name (capitalize first letter of each word)
  const formatName = (name: string): string => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (word.length === 0) return word
        // Handle special cases like "da", "de", "do", "dos", "das"
        const prepositions = ["da", "de", "do", "dos", "das", "e"]
        if (prepositions.includes(word.toLowerCase()) && word.length <= 3) {
          return word.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(" ")
  }

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    // Allow only valid characters during typing
    const filteredValue = rawValue.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]/g, "")

    // Prevent multiple consecutive spaces
    const cleanedValue = filteredValue.replace(/\s+/g, " ")

    onChange(cleanedValue)

    if (touched) {
      const validationError = validateName(cleanedValue)
      setInternalError(validationError)
    }
  }

  // Handle blur (format and validate)
  const handleBlur = () => {
    setTouched(true)
    const formattedValue = formatName(value.trim())
    onChange(formattedValue)

    const validationError = validateName(formattedValue)
    setInternalError(validationError)
  }

  // Handle focus
  const handleFocus = () => {
    setTouched(true)
  }

  const displayError = error || internalError
  const isValid = !displayError && value.length > 0

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User
            className={`h-5 w-5 transition-colors duration-200 ${
              displayError
                ? "text-red-400"
                : isValid
                ? "text-green-400"
                : "text-gray-400"
            }`}
          />
        </div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-purple-500 outline-none transition-all duration-200 ${
              displayError
                ? "border-red-300 focus:ring-red-500 bg-red-50/50"
                : isValid
                ? "border-green-300 focus:ring-green-500 bg-green-50/50"
                : "border-gray-300 focus:ring-purple-500 bg-transparent hover:border-gray-400"
            }`}
            maxLength={100}
          />
        </div>
      </div>
      {displayError && (
        <p className="text-red-400 text-sm mt-1 flex items-center">
          <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
          {displayError}
        </p>
      )}
      {isValid && (
        <p className="text-green-400 text-sm mt-1 flex items-center">
          <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
          Nome válido
        </p>
      )}
    </div>
  )
}
