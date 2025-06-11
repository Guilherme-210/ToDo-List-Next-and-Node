export interface CardProps {
  todo: Task
}
export interface Task {
  idCode: string
  title: string
  description: string
  createdAt: string
  deliveryDate: string
  status: string
  updatedAt: string
}