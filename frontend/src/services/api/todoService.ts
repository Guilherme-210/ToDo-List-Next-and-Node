const BASE_URL = "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List"

import { Task } from "@/types/Task"

const todoAPI = {
  async getAll(): Promise<Task[]> {
    const res = await fetch(BASE_URL)
    if (!res.ok) throw new Error("Erro ao buscar tarefas")
    return res.json()
  },

  async create(task: Partial<Task>) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
    if (!res.ok) throw new Error("Erro ao criar tarefa")
    return res.json()
  },

  async update(id: string, updates: Partial<Task>) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
    if (!res.ok) throw new Error("Erro ao atualizar tarefa")
    return res.json()
  },

  async remove(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    })
    if (!res.ok) throw new Error("Erro ap deletar tarefa")
    return res.json()
  },
}

export { todoAPI, BASE_URL }
