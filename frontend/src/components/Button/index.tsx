export default function Button({
  children,
  className = "",
  onClick,
  type,
}: Readonly<{
  children: React.ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}>) {
  className = className
    ? `text-gray-800 px-4 py-2 rounded ${className}`
    : "bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 "
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
