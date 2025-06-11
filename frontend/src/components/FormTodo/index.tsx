"use client"

import SectionHeader from "../SectionHeader"
import Form from "./Form"

export default function FormTodo({ onTaskCreated }: { onTaskCreated: () => void }) {
  return (
    <>
      <SectionHeader
        classNameSection="w-full h-full !bg-transparent justify-center max-md:relative max-md:z-10"
        classNameTitle="!bg-transparent !justify-center"
        Title="Add Task"
        ariaLabel="Formulário de tarefas"
      >
        <p className="text-gray-300 text-sm">
          Use the form below to add tasks to your list.
        </p>

        <Form onTaskCreated={onTaskCreated} />
      </SectionHeader>
    </>
  )
}
