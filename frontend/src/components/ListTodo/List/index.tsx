"use client"

import { useEffect, useState } from "react"
import Card from "./card"
import { Task } from "./interface"

export default function List({
  className = "",
  reloadList,
  setReloadList,
}: Readonly<{
  className?: string
  reloadList: boolean
  setReloadList: () => void
}>) {
  const [tasks, setTasks] = useState<Task[]>([])

  const deleteTask = async (taskId: string) => {
    const confirm = window.confirm(
      "Tem certeza que deseja deletar essa tarefa?"
    )
    if (!confirm) return

    try {
      const res = await fetch(
        `https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List/${taskId}`,
        {
          method: "DELETE",
        }
      )

      if (!res.ok) throw new Error("Falha ao deletar")

      setReloadList()
    } catch (err) {
      console.error(err)
      alert("Erro ao deletar tarefa.")
    }
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(
        "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List"
      )
      const data: Task[] = await res.json()

      const todayWithTime = new Date()
      const todayNoTime = new Date(todayWithTime)
      todayNoTime.setHours(0, 0, 0, 0)

      const updatedTasks = await Promise.all(
        data.map(async (task) => {
          const deliveryDate = new Date(task.deliveryDate)

          const compareDate = new Date(deliveryDate)

          if (!task.hasDeliveryTime) {
            compareDate.setHours(0, 0, 0, 0)
          }

          const isExpired = task.hasDeliveryTime
            ? compareDate < todayWithTime
            : compareDate < todayNoTime

          if (
            (isExpired && task.status === "Pending") ||
            task.status === "Up to date"
          ) {
            try {
              const res = await fetch(
                `https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List/${task.id}`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    status: "Expired",
                  }),
                }
              )

              if (!res.ok) throw new Error("Error updating expired status")

              return { ...task, status: "Expired" }
            } catch (err) {
              console.error("Error updating automatic status:", err)
            }
          }

          return task
        })
      )

      setTasks(updatedTasks)
    }

    fetchTasks()
  }, [reloadList])

  return (
    <ul
      className={`flex flex-col gap-2 w-full overflow-y-auto max-h-[calc(100vh-200px)] ${className}`}
    >
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-60 text-gray-500">
          <span className="text-5xl mb-4">📝</span>
          <p className="text-lg font-semibold">
            You do not have any registered tasks yet.
          </p>
          <p className="text-sm">Add a new task to get started!</p>
        </div>
      ) : (
        tasks.map((todo, index) => {
          return (
            <Card
              key={index}
              todo={todo}
              deleteTask={deleteTask}
              setReloadList={setReloadList}
            />
          )
        })
      )}
    </ul>
  )
}
