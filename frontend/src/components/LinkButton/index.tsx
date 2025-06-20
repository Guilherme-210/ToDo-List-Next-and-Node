import Link from "next/link"

interface LinkButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export default function LinkButton({ children, className = "", href = "/" }: LinkButtonProps ) {
  className = className
    ? `text-gray-800 px-4 py-2 rounded ${className}`
    : "bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 "
  return (
    <Link href={href} className={`${className}`}>
      {children}
    </Link>
  )
}
