// src/components/PhoneInput/CountryDropdown.tsx
import { countries, CountryCode } from "@/const/PhoneInput"

interface Props {
  onSelect: (country: CountryCode) => void
}

export default function CountryDropdown({  onSelect }: Props) {
  return (
    <div className="absolute top-full left-0 z-20 bg-gray-700 border border-gray-200 rounded-lg shadow-xl min-w-64 max-h-64 overflow-y-auto">
      {Object.entries(countries).map(([code, info]) => (
        <button
          key={code}
          type="button"
          onClick={() => onSelect(code as CountryCode)}
          className="w-full px-4 py-3 text-left hover:bg-gray-600 flex items-center space-x-3 border-b border-gray-200 last:border-b-0"
        >
          <span>{info.flag}</span>
          <div>
            <div className="font-medium text-sm">{info.name}</div>
            <div className="text-xs text-gray-200">{info.code}</div>
          </div>
        </button>
      ))}
    </div>
  )
}
