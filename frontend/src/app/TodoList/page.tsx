import Button from "@/components/Button"

export default function TodoList() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start justify-items-center p-8 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Formulário */}
      <section
        aria-label="Formulário de tarefas"
        className="flex flex-col gap-6 w-full max-w-md bg-gray-800 text-white  rounded-lg shadow-md col-span-1 min-w-[100%]"
      >
        <div className="flex items-center justify-between w-full bg-gray-700 p-4 rounded-t-lg">
          <h2 className="text-2xl text-shadow-lg/30 text-shadow-sky-300 font-bold">
            Add task
          </h2>
        </div>

        <div className="flex flex-col gap-4 px-6 pb-6 w-full">
          <p className="text-gray-300 text-sm">
            Use the form below to add tasks to your list.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Task title"
              className="p-2 rounded text-sky-200 focus:outline-none border-2 border-gray-700 focus:border-blue-400 hover:border-blue-300 transition"
            />
            <input
              type="date"
              placeholder="Task title"
              className="p-2 rounded text-sky-200 focus:outline-none border-2 border-gray-700 focus:border-blue-400 hover:border-blue-300 transition"
            />
            <textarea
              placeholder="Task description"
              className="p-2 rounded text-sky-200 focus:outline-none border-2 border-gray-700 focus:border-blue-400 hover:border-blue-300 transition"
            />

            <div className="flex flex-rol sm:flex-row gap-4 w-full w-full sm:justify-between">
              <Button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add task
              </Button>
              <Button>Clear</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Lista de Tarefas */}
      <section className="flex flex-col gap-4 w-full bg-gray-800 text-white rounded-lg shadow-md xl:col-start-2 xl:col-end-4">
        <div className="flex items-center justify-between w-full bg-gray-700 p-4 rounded-t-lg">
          <h2 className="text-2xl text-shadow-lg/30 text-shadow-sky-300 font-bold">
            Task list
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between w-full gap-4 px-6 pb-6 ">
          <p className="text-gray-300">
            Below are your created task. Mark as completed or delete.
          </p>

          <ul className="flex flex-col gap-2 w-full overflow-y-auto max-h-[calc(100vh-200px)]">
            <li className="bg-gray-700 text-black p-4 rounded shadow flex flex-col hover:bg-gray-400 gap-2">
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-lg font-semibold">Task title 1</h3>

                <div className="flex items-center gap-2 flex flex-col ">
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

                <div className="flex items-center gap-2 flex flex-col ">
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

                <div className="flex items-center gap-2 flex flex-col ">
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

                <div className="flex items-center gap-2 flex flex-col ">
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
      </section>
    </main>
  )
}
