"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { EmailInputProps } from "@/interface/InputsSignup"
import { validateEmail } from "@/utils/EmailInput"

export default function EmailInput({
  value = "",
  onChange,
  error,
}: EmailInputProps) {
  const [email, setEmail] = useState(value)

  useEffect(() => {
    setEmail((prevEmail) => (value !== prevEmail ? value : prevEmail))
  }, [value])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    onChange?.(newEmail)
  }

  const isValid = email.length === 0 || validateEmail(email)

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex flex-col w-full">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="your.email@email.com"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
              error || (!isValid && email.length > 0) ? "border-red-500" : ""
            }`}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {!isValid && email.length > 0 && !error && (
        <p className="text-red-500 text-sm mt-1">Invalid email</p>
      )}
    </div>
  )
}
