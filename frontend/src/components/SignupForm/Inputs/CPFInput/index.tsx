"use client"

import { useState, useEffect } from "react"
import { Fingerprint } from "lucide-react"

export default function CPFInput({ value = "", onChange, error }: {
  value?: string
  onChange?: (value: string) => void
  error?: string
}) {
  const [cpf, setCpf] = useState(value)

  const formatCpf = (input: string) => {
    const numbers = input.replace(/\D/g, "")

    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`
    if (numbers.length <= 9)
      return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(
      6,
      9
    )}-${numbers.slice(9, 11)}`
  }

  const validateCpf = (cpf: string) => {
    const numbers = cpf.replace(/\D/g, "")

    if (numbers.length !== 11) return false
    if (/^(\d)\1+$/.test(numbers)) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(numbers[i]) * (10 - i)
    }
    let digit1 = 11 - (sum % 11)
    if (digit1 > 9) digit1 = 0

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(numbers[i]) * (11 - i)
    }
    let digit2 = 11 - (sum % 11)
    if (digit2 > 9) digit2 = 0

    return parseInt(numbers[9]) === digit1 && parseInt(numbers[10]) === digit2
  }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCpf(e.target.value)
    setCpf(formatted)
    onChange?.(formatted)
  }

  useEffect(() => {
    if (value !== cpf) {
      setCpf(value)
    }
  }, [value])

  const isValid = cpf.length === 14 ? validateCpf(cpf) : true

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Fingerprint className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={cpf}
          onChange={handleCpfChange}
          placeholder="000.000.000-00"
          maxLength={14}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
            error || (!isValid && cpf.length === 14) ? "border-red-500" : ""
          }`}
        />
      </div>
    </div>
  )
}
