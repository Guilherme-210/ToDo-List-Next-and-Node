export interface InputLabelProps {
  isLabel?: boolean
  label: string
  type?: string
  placeholder?: string
  ClassNameDiv?: string
  ClassNameLabel?: string
  ClassNameInput?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}