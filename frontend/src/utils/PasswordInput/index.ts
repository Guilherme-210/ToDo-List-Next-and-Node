export function validatePassword(password: string): boolean {
  const minLength = /.{8,}/
  const hasUpperCase = /[A-Z]/
  const hasLowerCase = /[a-z]/
  const hasNumber = /[0-9]/
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/

  return (
    minLength.test(password) &&
    hasUpperCase.test(password) &&
    hasLowerCase.test(password) &&
    hasNumber.test(password) &&
    hasSpecialChar.test(password)
  )
}
