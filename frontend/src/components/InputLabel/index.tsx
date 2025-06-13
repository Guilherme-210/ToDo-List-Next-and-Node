import { InputLabelProps } from "./interface";


export default function InputLabel({
  isLabel = true,
  label,
  type = "text",
  placeholder,
  ClassNameDiv,
  ClassNameLabel,
  ClassNameInput,
  value,
  onChange,
}: InputLabelProps) {
  return (
    <div className={`flex flex-col w-full ${ClassNameDiv}`}>
      {isLabel && (
        <label className={`text-sky-100 mb-1 ${ClassNameLabel}`}>{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`w-full pl-2 pr-4 py-3 border rounded-lg focus:ring-2 bg-gray-600 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${ClassNameInput}`}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
