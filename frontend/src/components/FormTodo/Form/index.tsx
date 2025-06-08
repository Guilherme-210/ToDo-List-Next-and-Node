import Button from "../../Button"
import InputLabel from "../../InputLabel"
import TextareaLabel from "../../TextareaLabel"

export default function FormTodo() {
  return (
    <>
      <form className="flex flex-col gap-4">
        <InputLabel
          label="Task title"
          isLabel={true}
          type="text"
          placeholder="Task title"
        />

        <InputLabel label="delivery date" isLabel={true} type="date" />

        <TextareaLabel
          label="Task description"
          isLabel={true}
          placeholder="Task description"
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
    </>
  )
}
