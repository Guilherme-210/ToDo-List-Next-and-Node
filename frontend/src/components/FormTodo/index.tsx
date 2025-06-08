import SectionHeader from "../SectionHeader"
import Form from "./Form"

export default function FormTodo({ className }: Readonly<{ className?: string }>) {
  return (
    <>
      <SectionHeader
        className={className}
        Title="Add Task"
        ariaLabel="Formulário de tarefas"
      >
        <p className="text-gray-300 text-sm">
          Use the form below to add tasks to your list.
        </p>

        <Form />
      </SectionHeader>
    </>
  )
}
