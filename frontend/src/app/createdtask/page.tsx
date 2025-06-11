"use client"

import FormTodo from "@/components/FormTodo"

export default function CreatedTask() {
  return (
    <main className="grid grid-cols-1 gap-6 items-start justify-items-center p-8 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <FormTodo onTaskCreated={() => {}} />
    </main>
  )
}