export default function InputLabel({
  isLabel = true,
  label,
  type = "text",
  placeholder = "",
  ClassNameDiv = "",
  ClassNameLabel = "",
  ClassNameInput = "",
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
    <div className={`flex flex-col ${ClassNameDiv}`}>
      {isLabel && (
        <label className={`text-sky-300 mb-2 ${ClassNameLabel}`}>{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 rounded text-sky-200 focus:outline-none border-2 border-gray-700 focus:border-blue-400 hover:border-blue-300 transition ${ClassNameInput}`}
      />
    </div>
  )
}