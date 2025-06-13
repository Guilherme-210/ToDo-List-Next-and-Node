import React from "react"

export interface InputDeliveryProps {
    ClassNameDiv?: string
  ClassNameLabel?: string
  ClassNameInput?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  hasDeliveryTime: boolean
  onToggleDeliveryTime: (checked: boolean) => void
}
