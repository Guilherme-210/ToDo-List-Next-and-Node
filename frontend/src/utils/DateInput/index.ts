export function formatDate(input: string): string {
  const numbers = input.replace(/\D/g, "")

  if (numbers.length <= 2) return numbers
  if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`
}

export function validateDate(dateString: string): boolean {
  if (dateString.length !== 10) return false
  
      const [day, month, year] = dateString.split("/").map(Number)
      const date = new Date(year, month - 1, day)
      const today = new Date()
  
      // Check if date is valid
      if (
        date.getDate() !== day ||
        date.getMonth() !== month - 1 ||
        date.getFullYear() !== year
      ) {
        return false
      }
  
      // Check if date is not in the future
      if (date > today) return false
  
      // Check if person is not too old (reasonable age limit)
      const age = today.getFullYear() - year
      if (age > 120) return false
  
      return true
}
