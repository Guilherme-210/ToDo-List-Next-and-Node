"use client"

import SectionHeader from "@/components/SectionHeader"
import LoginForm from "@/components/LoginForm"
import LoginAside from "@/components/LoginAside"
import { useParams } from "next/navigation"
import SignupForm from "@/components/SignupForm"

export default function AuthPage() {
  const params = useParams()
  const authType = params.authType

  function renderForm() {
    if (authType === "login") {
      return <LoginForm />
    } else if (authType === "signup") {
      return <SignupForm  />
    } else {
      return <p>Rota inválida. Use /auth/login ou /auth/signup</p>
    }
  }

  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1  gap-6 justify-center p-0 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SectionHeader
        Title={"Login to ToDo List"}
        classNameSection="!bg-transparent justify-center max-md:relative max-md:z-10"
        classNameTitle="!bg-transparent !justify-center"
        ariaLabel="Login area"
      >
        {renderForm()}
      </SectionHeader>
      <LoginAside className="max-md:absolute max-md:inset-0 max-md:z-0 max-md:!bg-transparent" />
    </main>
  )
}
