"use client"

import { useContext, useEffect, useState } from "react"
import Card from "./card"
import { Task } from "../../../types/Task"
import EditedTask from "./EditedTask"
import { reloadListContext } from "@/context/reloadListContext"
import { todoAPI } from "@/services/api/todoService"

export default function List({
  className = "",
}: Readonly<{
  className?: string
}>) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const { reloadList, setReloadList } = useContext(reloadListContext)!

  const deleteTask = async (taskId: string) => {
    const confirm = window.confirm(
      "Tem certeza que deseja deletar essa tarefa?"
    )
    if (!confirm) return

    try {
      await todoAPI.remove(taskId)

      setReloadList((prev) => !prev)
    } catch (err) {
      console.error(err)
      alert("Erro ao deletar tarefa.")
    }
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const data: Task[] = await todoAPI.getAll()

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
            isExpired &&
            (task.status === "Pending" || task.status === "Up to date")
          ) {
            try {
              await todoAPI.update(task.id, {
                status: "Expired",
              })

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
    <>
      {editingTask && (
        <EditedTask
          task={editingTask}
          onTaskUpdated={() => {
            setEditingTask(null)
          }}
        />
      )}
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
                onEdit={() => setEditingTask(todo)}
              />
            )
          })
        )}
      </ul>
    </>
  )
}
