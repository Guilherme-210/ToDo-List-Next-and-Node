import Button from "@/components/Button"
import SectionHeader from "../SectionHeader"

export default function List() {
  return (
    <>
      <SectionHeader
        classNameSection="xl:col-start-2 xl:col-end-4"
        Title="Task list"
        ariaLabel="Formulário de tarefas"
      >
        <div className="flex flex-col items-center justify-between w-full gap-4 px-6 pb-6 ">
          <p className="text-gray-300">
            Below are your created task. Mark as completed or delete.
          </p>

          <ul className="flex flex-col gap-2 w-full overflow-y-auto max-h-[calc(100vh-200px)]">
            <li className="bg-gray-700 text-black p-4 rounded shadow flex flex-col hover:bg-gray-400 gap-2">
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-lg font-semibold">Task title 1</h3>

                <div className="flex items-center gap-2 flex-col ">
                  <span className="text-sm text-black">Add: 2025-01-01</span>
                  <span className="text-sm text-black">
                    delivery: 2025-01-10
                  </span>
                </div>
              </div>

              <p className="text-black ">This is the description of task 1.</p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
                <Button className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded">
                  Mark as completed
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-600 transition px-3 py-1 rounded">
                  Delete
                </Button>
              </div>
            </li>
            <li className="bg-gray-700 text-black p-4 rounded shadow flex flex-col hover:bg-gray-400 gap-2">
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-lg font-semibold">Task title 1</h3>

                <div className="flex items-center gap-2  flex-col ">
                  <span className="text-sm text-black">Add: 2025-01-01</span>
                  <span className="text-sm text-black">
                    delivery: 2025-01-10
                  </span>
                </div>
              </div>

              <p className="text-black ">This is the description of task 1.</p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
                <Button className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded">
                  Mark as completed
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-600 transition px-3 py-1 rounded">
                  Delete
                </Button>
              </div>
            </li>
            <li className="bg-gray-700 text-black p-4 rounded shadow flex flex-col hover:bg-gray-400 gap-2">
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-lg font-semibold">Task title 1</h3>

                <div className="flex items-center gap-2 flex-col ">
                  <span className="text-sm text-black">Add: 2025-01-01</span>
                  <span className="text-sm text-black">
                    delivery: 2025-01-10
                  </span>
                </div>
              </div>

              <p className="text-black ">This is the description of task 1.</p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
                <Button className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded">
                  Mark as completed
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-600 transition px-3 py-1 rounded">
                  Delete
                </Button>
              </div>
            </li>
            <li className="bg-gray-700 text-black p-4 rounded shadow flex flex-col hover:bg-gray-400 gap-2">
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-lg font-semibold">Task title 1</h3>

                <div className="flex items-center gap-2 flex-col ">
                  <span className="text-sm text-black">Add: 2025-01-01</span>
                  <span className="text-sm text-black">
                    delivery: 2025-01-10
                  </span>
                </div>
              </div>

              <p className="text-black ">This is the description of task 1.</p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
                <Button className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded">
                  Mark as completed
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-600 transition px-3 py-1 rounded">
                  Delete
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </SectionHeader>
    </>
  )
}
