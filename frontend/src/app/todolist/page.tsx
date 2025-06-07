import List from "@/components/List"
import Form from "@/components/Form"

export default function TodoList() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start justify-items-center p-8 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Formulário */}
      <Form />

      {/* Lista de Tarefas */}
      <List />
    </main>
  )
}
