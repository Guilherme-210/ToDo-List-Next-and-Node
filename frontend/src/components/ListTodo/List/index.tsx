'use client'

import { useEffect, useState } from "react"
import Card from "./card";

export default function List({
  className = "",
  reloadList,
}: Readonly<{
  className?: string
  reloadList: boolean
}>) {
  const [tasks, setTasks] = useState([])

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
      {tasks.map((todo, index) => (
        <Card key={index} todo={todo} />
      ))}
    </ul>
  )
}