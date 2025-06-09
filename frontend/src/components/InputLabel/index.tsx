export default function InputLabel({
  isLabel = true,
  label,
  type = "text",
  placeholder,
  ClassNameDiv,
  ClassNameLabel,
  ClassNameInput,
}: Readonly<{
  isLabel?: boolean
  label: string
  type?: string
  placeholder?: string
  ClassNameDiv?: string
  ClassNameLabel?: string
  ClassNameInput?: string
}>) {
  return (
    <div className={`flex flex-col w-full ${ClassNameDiv}`}>
      {isLabel && (
        <label className={`text-sky-300 mb-2 ${ClassNameLabel}`}>{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${ClassNameInput}`}
      />
    </div>
  )
}
