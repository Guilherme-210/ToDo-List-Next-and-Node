/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import InputLabel from "@/components/InputLabel"
import TodoListLogin from "./images/TodoListLogin.png"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 gap-6 justify-center p-8 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SectionHeader Title="Login to My ToDo List" ariaLabel="Login area">
        <div className="w-full">
          <p className="text-lg text-gray-400 text-center sm:text-left">
            Please enter your credentials to access your tasks.
          </p>

          {/* Form */}
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

            <button
              // type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide"
            >
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

            <button
              type="button"
              className="w-full text-purple-600 hover:bg-purple-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide"
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </SectionHeader>

      <img
        src={TodoListLogin}
        alt="Login Illustration"
        width={100}
        height={100}
        // className="w-full h-auto object-cover"
      />
    </main>
  )
}
