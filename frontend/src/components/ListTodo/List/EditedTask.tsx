"use client"
import { useState } from "react"
import InputDelivery from "@/components/FormTodo/Form/Inputs/InputDelivery"
import InputLabel from "@/components/InputLabel"
import TextareaLabel from "@/components/TextareaLabel"
import Button from "@/components/Button"

interface EditedTaskProps {
  task: {
    id: string
    title: string
    description: string
    deliveryDate: string
    status: string
    hasDeliveryTime: boolean
  }
  setReloadList: () => void

  onTaskUpdated: () => void
}

export default function EditedTask({ task, onTaskUpdated, setReloadList }: EditedTaskProps) {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [deliveryDate, setDeliveryDate] = useState(task.deliveryDate)
  const [hasDeliveryTime, setHasDeliveryTime] = useState(task.hasDeliveryTime)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // const status = 

    try {
      const res = await fetch(
        `https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            deliveryDate,
            hasDeliveryTime,
            status: "Up to date",
            updatedAt: new Date().toISOString(),
          }),
        }
      )

      if (!res.ok) throw new Error("Erro ao atualizar tarefa")

      onTaskUpdated()
      setReloadList()
      // alert("Tarefa atualizada com sucesso!")
    } catch (err) {
      console.error("Erro ao atualizar tarefa:", err)
      alert("Erro ao atualizar tarefa. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputLabel
          label="Título"
          isLabel={true}
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <InputDelivery
          hasDeliveryTime={hasDeliveryTime}
          onToggleDeliveryTime={(checked) => setHasDeliveryTime(checked)}
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />

        <TextareaLabel
          label="Descrição"
          isLabel={true}
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {isSubmitting ? "Salvando..." : "Salvar Alterações"}
          </Button>
          
          <Button
            type="submit"
            onClick={() => onTaskUpdated()}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </>
  )
}
