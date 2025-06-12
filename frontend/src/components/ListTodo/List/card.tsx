import Button from "@/components/Button"
import { CardProps } from "./interface"

export default function Card({ todo, deleteTask }: CardProps) {
  const { idCode, title, description, createdAt, deliveryDate, status, id } = todo

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  const formattedDeliveryDate = new Date(deliveryDate).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  )

  return (
    <>
      <li
        id={idCode}
        className="
      bg-gray-700 
      m-3 text-black p-4 rounded shadow flex flex-col hover:bg-gray-400 gap-2 outline-offset-2 outline-2 outline-gray-500 hover:outline-gray-300 "
      >
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>

          <div className="flex items-center gap-2 flex-col ">
            <span className="text-sm text-black">
              Add: {formattedCreatedAt}
            </span>
            <span className="text-sm text-black">
              delivery: {formattedDeliveryDate}
            </span>
            <span className="text-sm text-black">{status}</span>
          </div>
        </div>

        <p className="text-black ">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
          <Button className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded">
            Mark as completed
          </Button>
          <Button
            className="bg-red-500 text-white hover:bg-red-600 transition px-3 py-1 rounded"
            onClick={() => deleteTask(id)}
          >
            Delete
          </Button>
        </div>
      </li>
    </>
  )
}
