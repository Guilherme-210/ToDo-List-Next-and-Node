import SectionHeader from "../SectionHeader"
import List from "./List"

export default function ListTodo() {
  return (
    <>
      <SectionHeader
        classNameSection="w-full !bg-transparent justify-center max-md:relative max-md:z-10"
        classNameTitle="!bg-transparent !justify-center"
        Title="Task list"
        ariaLabel="Lista de tarefas"
      >
        <div className="flex flex-col items-center justify-between w-full gap-4 px-6 pb-6 ">
          <p className="text-gray-300">
            Below are your created task. Mark as completed or delete.
          </p>

          <List />
        </div>
      </SectionHeader>
    </>
  )
}
