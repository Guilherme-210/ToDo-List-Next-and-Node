import SectionHeader from "../SectionHeader"
import List from "./List"

export default function ListTodo({ reloadList, setReloadList }: { reloadList: boolean, setReloadList: () => void }) {
  return (
    <>
      <SectionHeader
        classNameSection="justify-center max-md:relative max-md:z-10 !px-0 flex flex-col !bg-[#5039a0] h-full w-full !rounded-none"
        classNameTitle="!bg-transparent !justify-center"
        Title="Task list"
        ariaLabel="Lista de tarefas"
      >
        <div className="flex flex-col items-center justify-between w-full gap-4 px-0 pb-6 ">
          <p className="text-gray-300">
            Below are your created task. Mark as completed or delete.
          </p>

          <List reloadList={reloadList} setReloadList={setReloadList} />
        </div>
      </SectionHeader>
    </>
  )
}
