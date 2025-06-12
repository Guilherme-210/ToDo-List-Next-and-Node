export interface CardProps {
  todo: Task
  deleteTask: (idCode: string) => void
}
export interface Task {
  idCode: string
  title: string
  description: string
  createdAt: string
  deliveryDate: string
  status: string
  updatedAt: string
  id: string
}