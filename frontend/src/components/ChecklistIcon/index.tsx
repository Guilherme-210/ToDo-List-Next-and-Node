/* eslint-disable @next/next/no-img-element */
// components/ChecklistIcon.tsx
// import Image from "next/image"

export default function ChecklistIcon({
  Width = 150,
  Height = 150,
}: {
  Width?: number
  Height?: number
}) {
  return (
    <div className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
      <img
        src="/images/checklist-icon.png"
        alt="Ícone de checklist"
        width={Width}
        height={Height}
      />
    </div>
  )
}
