import Button from "@/components/Button"

export default function Form() {
  return (
    <>
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
    </>
  )
}