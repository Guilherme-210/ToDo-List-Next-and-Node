import Button from "@/components/Button"
import { Task } from "../../../types/Task"
import { PenLine, Square, SquareCheck, Trash } from "lucide-react"
import { reloadListContext } from "@/context/reloadListContext"
import { useContext } from "react"
import { formatDate } from "@/utils/formatDate"
import { getStatusColor } from "@/utils/statusColors"
import { todoAPI } from "@/services/api/todoService"

export interface CardProps {
  todo: Task
  deleteTask: (idCode: string) => void
  onEdit: () => void
}

export default function Card({ todo, deleteTask, onEdit }: CardProps) {
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
  const { setReloadList } = useContext(reloadListContext)!

  const { text, bg, bgHover } = getStatusColor(status)

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
      await todoAPI.update(id, {
        status: toggleStatus.newStatus,
        completedAt: toggleStatus.completedAt,
      })
      
      setReloadList((prev) => !prev) // Força recarregar a lista
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
                <strong>completo:</strong>{" "}
                {formatDate(completedAt, hasDeliveryTime)}
              </span>
            ) : updatedAt > createdAt ? (
              <span>
                <strong>Edited:</strong>{" "}
                {formatDate(updatedAt, hasDeliveryTime)}
              </span>
            ) : (
              <span>
                <strong>Add:</strong> {formatDate(createdAt, hasDeliveryTime)}
              </span>
            )}
            <span>
              <strong>Delivery:</strong>{" "}
              {formatDate(deliveryDate, hasDeliveryTime)}
            </span>
            <span className={`${text}`}>
              <strong>Status:</strong> {status}
            </span>
          </div>
        </div>

        {/* Coluna 3: Botões */}
        <div className="col-span-1 flex flex-col sm:flex-row gap-4 sm:justify-end items-start sm:items-center">
          <Button
            className={`${bg} text-white ${bgHover} transition px-3 py-1 rounded`}
            onClick={toggleStatus}
          >
            {status === "Completed" ? <SquareCheck /> : <Square />}
          </Button>
          <Button
            className="bg-green-500 text-white hover:bg-green-600 transition px-3 py-1 rounded"
            onClick={onEdit}
          >
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
