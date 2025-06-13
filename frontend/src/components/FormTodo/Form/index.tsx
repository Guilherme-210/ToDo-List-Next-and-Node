"use client"
import { useState } from "react"

import Button from "../../Button"
import InputLabel from "../../InputLabel"
import TextareaLabel from "../../TextareaLabel"
import InputDelivery from "./Inputs/InputDelivery"

export default function Form({ onTaskCreated }: { onTaskCreated: () => void }) {
  const [title, setTitle] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasDeliveryTime, setHasDeliveryTime] = useState(false) 

  const resetForm = () => {
    setTitle("")
    setDeliveryDate("")
    setDescription("")
    setHasDeliveryTime(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !deliveryDate || !description) {
      alert("Please fill in all fields.")
      return
    }

    setIsSubmitting(true)

    const createdAt = new Date().toISOString()

    const newTask = {
      idCode: Date.now().toString(),
      createdAt: createdAt,
      updatedAt: new Date().toISOString(),
      hasDeliveryTime: hasDeliveryTime,
      completedAt: " ",
      title: title,
      description: description,

      status: deliveryDate <= createdAt ? "Pending" : "up to date" ,
      deliveryDate: hasDeliveryTime
        ? new Date(deliveryDate).toISOString()
        : new Date(`${deliveryDate}T00:00:01`).toISOString(),
    }

    try {
      const res = await fetch(
        "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/ToDo-List",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTask),
        }
      )

      if (res.ok) {
        const data = await res.json()
        // alert("Tarefa adicionada com sucesso!")
        resetForm()
        onTaskCreated()
        console.log("Task created:", data)
      } else {
        const errorData = await res.json()
        console.error("API Error:", errorData)
        alert("Error adding task: " + errorData.message)
      }
    } catch (error) {
      console.error("Error connecting to API:", error)
      alert("API connection error. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }

    console.log(`Form submitted: ${newTask}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputLabel
          label="Task title"
          isLabel={true}
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <InputDelivery
          hasDeliveryTime={hasDeliveryTime}
          onToggleDeliveryTime={(checked) => {
            setHasDeliveryTime(checked)
            if (checked && deliveryDate.length === 10) {
              setDeliveryDate(`${deliveryDate}T00:00`);
            }
            //  else if (!checked && deliveryDate.includes('T')) {
            //   setDeliveryDate(deliveryDate.split('T')[0]);
            // }
          }}
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />

        <TextareaLabel
          label="Task description"
          isLabel={true}
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex flex-rol sm:flex-row gap-4 w-full sm:justify-between">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            disabled={isSubmitting}
            aria-label="Add Task"
          >
            {isSubmitting ? "Adding..." : "Add Task"}
          </Button>
          <Button type="button" onClick={() => resetForm()}>
            Clear
          </Button>
        </div>
      </form>
    </>
  )
}
