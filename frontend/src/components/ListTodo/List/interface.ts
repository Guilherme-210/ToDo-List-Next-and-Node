export interface CardProps {
  todo: Task
  deleteTask: (idCode: string) => void
  setReloadList: () => void
}
export interface Task {
  idCode: string
  title: string
  description: string
  createdAt: string
  deliveryDate: string
  status: "Pending" | "Due" | "Completed"
  updatedAt: string
  id: string
}