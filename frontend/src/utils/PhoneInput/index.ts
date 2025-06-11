import { countries, CountryCode } from "@/const/PhoneInput"

function formatPhone(input: string, countryCode: CountryCode) {
    const numbers = input.replace(/\D/g, "")
    const format = countries[countryCode].format

    let formatted = ""
    let digitIndex = 0

    for (let i = 0; i < format.length; i++) {
      const char = format[i]

      if (char === "#" && digitIndex < numbers.length) {
        formatted += numbers[digitIndex]
        digitIndex++
      } else if (char !== "#") {
        formatted += char
      }

      if (digitIndex >= numbers.length) {
        break
      }
    }

    return formatted
  }

  export { formatPhone }