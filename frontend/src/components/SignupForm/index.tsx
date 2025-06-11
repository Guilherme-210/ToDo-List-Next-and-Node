import Link from "next/link"
import CPFInput from "./Inputs/CPFInput"
import EmailInput from "./Inputs/EmailInput"
import PhoneInput from "./Inputs/PhoneInput"
import DateInput from "./Inputs/DateInput"
import PasswordInput from "./Inputs/PasswordInput"
import NameInput from "./Inputs/NameInput"
import { useState } from "react"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cpf: "",
    email: "",
    birthDate: "",
    Password: "",
  })

  return (
    <form className="w-full space-y-6">
      <NameInput
        value={formData.name}
        onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
      />
      <CPFInput
        value={formData.cpf}
        onChange={(value) => setFormData((prev) => ({ ...prev, cpf: value }))}
      />
      <EmailInput
        value={formData.email}
        onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
      />
      <PhoneInput
        value={formData.phone}
        onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
      />
      <DateInput
        value={formData.birthDate}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, birthDate: value }))
        }
      />
      <PasswordInput
        value={formData.Password}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, Password: value }))
        }
      />

      <div className="text-sm text-gray-500">
        By creating an account, you agree to our{" "}
        <Link
          href="/terms"
          className="text-purple-600 hover:underline"
          aria-label="Terms of Service"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-purple-600 hover:underline"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </Link>
      </div>
      <button className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide">
        Create Account
      </button>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <p className="px-2 bg-white text-gray-500">
            Already have an account?
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center ">
        <Link
          href="/auth/login"
          aria-label="Log in to your account"
          className="text-purple-600 hover:bg-purple-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide"
        >
          Log In
        </Link>
      </div>
    </form>
  )
}
