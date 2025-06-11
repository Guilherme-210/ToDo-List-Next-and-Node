export interface TextareaLabelProps {
  isLabel?: boolean
  label: string
  placeholder?: string
  ClassNameDiv?: string
  ClassNameLabel?: string
  ClassNameTextarea?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
