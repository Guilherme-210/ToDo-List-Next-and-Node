import { useState } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import InputLabel from "@/components/InputLabel"
import Link from "next/link"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <form className="w-full space-y-6">
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <InputLabel
            isLabel={false}
            label=""
            type="email"
            placeholder="E-mail"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <InputLabel
            isLabel={false}
            label=""
            type={showPassword ? "password" : "text"}
            placeholder="Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div className="text-right">
        <a
          href="#"
          className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      <button className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide">
        To enter
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <p className="px-2 bg-white text-gray-500">
            {`Don't have an account yet?`}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center ">
        <Link
          href="/auth/signup"
          aria-label="Create a new account"
          className="text-purple-600 hover:bg-purple-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide"
        >
          CREATE ACCOUNT
        </Link>
      </div>
    </form>
  )
}
