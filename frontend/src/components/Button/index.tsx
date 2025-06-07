export default function Button({
  children,
  className = "",
  onClick,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}>) {
  className = className
    ? `text-gray-800 px-4 py-2 rounded ${className}`
    : "bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 "
  return (
    <button
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}