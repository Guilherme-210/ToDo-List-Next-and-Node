"use client"

import { useState, useEffect } from "react"
import { Fingerprint } from "lucide-react"
import { CPFInputProps } from "@/interface/InputsSignup"
import { formatCpf, validateCpf } from "@/utils/CPFInput"

export default function CPFInput({
  value = "",
  onChange,
  error,
}: CPFInputProps) {
  const [cpf, setCpf] = useState(value)

  useEffect(() => {
    setCpf((prev) => (value !== prev ? value : prev))
  }, [value])

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCpf(e.target.value)
    setCpf(formatted)
    onChange?.(formatted)
  }

  const isValid = cpf.length !== 14 || validateCpf(cpf)

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

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {!error && !isValid && (
        <p className="text-red-500 text-sm mt-1">CPF inválido</p>
      )}
    </div>
  )
}
