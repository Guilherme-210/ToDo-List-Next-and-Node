import Button from "@/components/Button"
import { Task } from "./interface"
import { PenLine, Square, SquareCheck, Trash } from "lucide-react"

export interface CardProps {
  todo: Task
  deleteTask: (idCode: string) => void
  setReloadList: () => void
}

export default function Card({ todo, deleteTask, setReloadList }: CardProps) {
  const {
    idCode,
    title,
    description,
    createdAt,
    deliveryDate,
    status,
    id,
    hasDeliveryTime,
    updatedAt,
    completedAt,
  } = todo

  let statusTextColor, statusBgColor, statusHoverBgColor

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
      ...(hasDeliveryTime && {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  )

  const formattedCompletedAt = new Date(completedAt).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  )

  const formattedUpdatedAt = new Date(updatedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  switch (status) {
    case "Pending":
      statusTextColor = "text-yellow-500"
      statusBgColor = "bg-gray-500"
      statusHoverBgColor = "hover:bg-gray-700"
      break
    case "Expired":
      statusTextColor = "text-red-500"
      statusBgColor = "bg-red-500"
      statusHoverBgColor = "hover:bg-red-600"
      break
    case "Completed":
      statusTextColor = "text-green-500"
      statusBgColor = "bg-green-500"
      statusHoverBgColor = "hover:bg-green-600"
      break
    default:
      statusTextColor = "text-gray-500"
      statusBgColor = "bg-gray-500"
      statusHoverBgColor = "hover:bg-gray-700"
  }

  const toggleStatus = async () => {
    const now = new Date()

    const toggleStatus =
      status === "Completed"
        ? {
            newStatus: "Pending",
            completedAt: " ",
          }
        : {
            newStatus: "Completed",
            completedAt: now.toISOString(),
          }

    try {
      const res = await fetch(
        `https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: toggleStatus.newStatus,
            completedAt: toggleStatus.completedAt,
          }),
        }
      )

      if (!res.ok) throw new Error("Erro ao atualizar status")

      setReloadList() // Força recarregar a lista
    } catch (err) {
      console.error(err)
      alert("Erro ao mudar o status da tarefa.")
    }
  }

  return (
    <>
      <li
        id={idCode}
        className="bg-gray-700 m-3 text-black p-4 rounded shadow hover:bg-gray-600 outline-offset-2 outline-2 outline-gray-500 :outline-gray-300 grid gap-2 grid-rows-1 sm:grid-rows-2"
      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          {/* Coluna 1: Título */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-black">{description}</p>
          </div>

          {/* Coluna 2: Datas e Status */}
          <div className="col-span-1 flex flex-col gap-1 text-sm text-black">
            {status === "Completed" ? (
              <span>
                <strong>completo:</strong> {formattedCompletedAt}
              </span>
            ) : updatedAt > createdAt ? (
              <span>
                <strong>Edited:</strong> {formattedUpdatedAt}
              </span>
            ) : (
              <span>
                <strong>Add:</strong> {formattedCreatedAt}
              </span>
            )}
            <span>
              <strong>Delivery:</strong> {formattedDeliveryDate}
            </span>
            <span className={`${statusTextColor}`}>
              <strong>Status:</strong> {status}
            </span>
          </div>
        </div>

        {/* Coluna 3: Botões */}
        <div className="col-span-1 flex flex-col sm:flex-row gap-4 sm:justify-end items-start sm:items-center">
          <Button
            className={`${statusBgColor} text-white ${statusHoverBgColor} transition px-3 py-1 rounded`}
            onClick={toggleStatus}
          >
            {status === "Completed" ? <SquareCheck /> : <Square />}
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded">
            <PenLine />
          </Button>
          <Button
            className="bg-red-500 text-white hover:bg-red-600 transition px-3 py-1 rounded "
            onClick={() => deleteTask(id)}
          >
            <Trash />
          </Button>
        </div>
      </li>
    </>
  )
}
