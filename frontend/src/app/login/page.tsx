"use client"

import SectionHeader from "@/components/SectionHeader"
import LoginForm from "@/components/LoginForm"
import LoginAside from "@/components/LoginAside"

export default function LoginPage() {
  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 gap-6 justify-center p-0 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SectionHeader
        Title="Login to My ToDo List"
        classNameSection="!bg-transparent justify-center "
        classNameTitle="!bg-transparent !justify-center"
        ariaLabel="Login area"
      > 
        <div className="w-full">
          <p className="text-lg text-gray-400 text-center sm:text-left">
            Please enter your credentials to access your tasks.
          </p>
          <LoginForm />
        </div>
      </SectionHeader>
      <LoginAside />
    </main>
  )
}
