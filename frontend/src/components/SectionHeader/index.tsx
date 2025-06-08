export default function SectionHeader({
  Title,
  children,
  ariaLabel,
  className = "",
}: Readonly<{
  Title: string
  children?: React.ReactNode
  ariaLabel?: string
  className?: string
}>) {
  className = className
    ? `flex flex-col gap-4  bg-gray-800 text-white rounded-lg shadow-lg ${className}`
    : "flex flex-col gap-4 w-full bg-gray-800 text-white rounded-lg shadow-lg"
  return (
    <>
      <section
        aria-label={ariaLabel}
        className={className}
      >
        <div className="flex items-center justify-between w-full bg-gray-700 p-4 rounded-t-lg">
          <h2 className="text-2xl text-shadow-lg/30 text-shadow-sky-300 font-bold">
            {Title}
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-6 pb-6 w-full">{children}</div>
      </section>
    </>
  )
}
