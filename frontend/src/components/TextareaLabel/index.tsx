import { TextareaLabelProps } from "@/interface/TextareaLabel"

export default function TextareaLabel({
  isLabel = true,
  label,
  placeholder = "",
  ClassNameDiv = "",
  ClassNameLabel = "",
  ClassNameTextarea = "",
}: TextareaLabelProps ) {
  return (
    <div className={`flex flex-col ${ClassNameDiv}`}>
      {isLabel && (
        <label className={`text-sky-300 mb-2 ${ClassNameLabel}`}>{label}</label>
      )}

      <textarea
        placeholder={placeholder}
        className={`p-2 rounded text-sky-200 focus:outline-none border-2 border-gray-700 focus:border-blue-400 hover:border-blue-300 transition ${ClassNameTextarea}`}
      />
    </div>
  )
}
