import ListTodo from "@/components/ListTodo"
import FormTodo from "@/components/FormTodo"

export default function TodoList() {
  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-2 max-md:gap-0 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Formulário */}
      <div className="flex flex-col  justify-center w-full p-4">
        <FormTodo />
      </div>

      {/* Lista de Tarefas */}
      <div className="flex flex-col  justify-center w-full p-4 bg-[#5039a0]">
        <ListTodo />
      </div>
    </main>
  )
}
