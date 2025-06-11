"use client"

import ListTodo from "@/components/ListTodo"
import FormTodo from "@/components/FormTodo"
import { useState } from "react"

export default function TodoList() {
  const [reloadList, setReloadList] = useState(false)

  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-2 max-md:gap-0 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Formulário */}
      <FormTodo onTaskCreated={() => setReloadList((prev) => !prev)} />

      {/* Lista de Tarefas */}
      <ListTodo reloadList={reloadList} />
    </main>
  )
}
