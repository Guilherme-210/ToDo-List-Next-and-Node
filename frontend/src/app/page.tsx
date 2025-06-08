import LinkButton from "@/components/LinkButton"

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold text-center sm:text-left text-gray-200 tracking-tight">
          Welcome to My ToDo List
        </h2>
        <p className="text-lg text-gray-400 text-center sm:text-left">
          This is a simple todo list app built with Next.js and Node.js.
        </p>

        <div className="flex flex-row items-center sm:items-start gap-4 w-full justify-center">
          <LinkButton
            href="/createdtask"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <span>Create a new task</span>
          </LinkButton>

          <LinkButton
            href="/todolist"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <span>Task List</span>
          </LinkButton>

          <LinkButton>
            <span>Learn More</span>
          </LinkButton>
        </div>
      </section>
    </main>
  )
}
