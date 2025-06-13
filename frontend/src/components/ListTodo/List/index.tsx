"use client"

import { useEffect, useState } from "react"
import Card from "./card"

export default function List({
  className = "",
  reloadList,
  setReloadList,
}: Readonly<{
  className?: string
  reloadList: boolean
  setReloadList: () => void
}>) {
  const [tasks, setTasks] = useState([])

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
      const data = await res.json()
      setTasks(data)
    }

    fetchTasks()
  }, [reloadList])

  return (
    <ul
      className={`flex flex-col gap-2 w-full overflow-y-auto max-h-[calc(100vh-200px)] ${className}`}
    >
      {tasks.map((todo, index) => {
                return (
                  <Card
                    key={index}
                    todo={todo}
                    deleteTask={deleteTask}
                    setReloadList={setReloadList}
                  />
                )
      })}
    </ul>
  )
}
