"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"
import { PasswordInputProps } from "@/interface/InputsSignup"
import { validatePassword } from "@/utils/PasswordInput" // importa o validador

export default function PasswordInput({
  value = "",
  onChange,
  error,
}: PasswordInputProps) {
  const [password, setPassword] = useState(value ?? "")
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    onChange?.(newPassword)
  }

  useEffect(() => {
    setPassword((prevPassword) =>
      (value ?? "") !== prevPassword ? value ?? "" : prevPassword
    )
  }, [value])

  const isValid = password.length === 0 || validatePassword(password)

  return (
    <div>
      <div className="relative">
        {/* Ícone do cadeado */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>

        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          maxLength={14}
          className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
            error ? "border-red-500" : ""
          }`}
        />

        {/* Botão para mostrar/ocultar senha */}
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          )}
        </button>
      </div>

      {!isValid && password.length > 0 && !error && (
        <p className="text-red-500 text-sm mt-1">
          A senha precisa ter no mínimo 8 caracteres, com letras maiúsculas,
          minúsculas, números e símbolos.
        </p>
      )}
    </div>
  )
}
