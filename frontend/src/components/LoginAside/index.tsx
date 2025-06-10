import ChecklistIcon from "@/components/ChecklistIcon"

export default function LoginAside({className}: {className?: string}) {
  return (
    <div className={`flex flex-col w-full justify-center items-center bg-[#5039a0] ${className}`}>
      <ChecklistIcon />
    </div>
  )
}
