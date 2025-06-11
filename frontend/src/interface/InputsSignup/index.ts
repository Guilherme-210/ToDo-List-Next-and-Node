export interface EmailInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export interface PhoneInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export interface CPFInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export interface NameInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
}

export interface DateInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export interface PasswordInputProps {
  value?: string
  onChange?: (value: string) => void
  error?: string
}