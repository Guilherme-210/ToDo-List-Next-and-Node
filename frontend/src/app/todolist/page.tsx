"use client"

import ListTodo from "@/components/ListTodo"
import FormTodo from "@/components/FormTodo"
import { useState } from "react"
import { reloadListContext } from "./reloadListContext"

export default function TodoList() {
  const [reloadList, setReloadList] = useState(false)

  return (
    <reloadListContext.Provider value={{reloadList, setReloadList}}>
      <main className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-2 max-md:gap-0 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Formulário */}
        <FormTodo />

        {/* Lista de Tarefas */}
        <ListTodo />
      </main>
    </reloadListContext.Provider>
  )
}
