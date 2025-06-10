// import Image from "next/image"

import { User } from "lucide-react"

export default function ChecklistIcon({
  width = 150,
  height = 150,
}: {
  width?: number
  height?: number
}) {
  return (
    <div className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
      <User
        className="text-purple-600 dark:text-purple-400"
        width={width}
        height={height}
      />
      {/* <img
        src="/images/checklist-icon.png"
        alt="Ícone de checklist"
        width={width}
        height={height}
      /> */}
    </div>
  )
}
