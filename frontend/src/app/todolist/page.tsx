import ListTodo from "@/components/ListTodo"
import FormTodo from "@/components/FormTodo"

export default function TodoList() {
  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-2 max-md:gap-0 gap-6 items-start justify-items-center p-8 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Formulário */}
      <FormTodo className="w-full m-0" />

      {/* Lista de Tarefas */}
      <ListTodo />
    </main>
  )
}
