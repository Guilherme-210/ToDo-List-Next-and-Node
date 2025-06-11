import { TextareaLabelProps } from "@/interface/TextareaLabel"

export default function TextareaLabel({
  isLabel = true,
  label,
  placeholder = "",
  ClassNameDiv = "",
  ClassNameLabel = "",
  ClassNameTextarea = "",
  value,
  onChange,
}: TextareaLabelProps ) {
  return (
    <div className={`flex flex-col ${ClassNameDiv}`}>
      {isLabel && (
        <label className={`text-sky-100 mb-1 ${ClassNameLabel}`}>{label}</label>
      )}

      <textarea
        placeholder={placeholder}
        className={`p-2 rounded focus:outline-none border-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${ClassNameTextarea}`}
        value={value}
        onChange={onChange}
        rows={2}
      />
    </div>
  )
}
