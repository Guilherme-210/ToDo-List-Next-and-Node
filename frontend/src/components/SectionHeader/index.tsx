import { SectionHeaderProps } from "@/interface/SectionHeader";

export default function SectionHeader({
  Title,
  children,
  ariaLabel,
  classNameSection,
  classNameTitle,
  classNameContent,
}: SectionHeaderProps) {
  return (
    <>
      <section
        aria-label={ariaLabel}
        className={`flex flex-col gap-4  bg-gray-800 text-white rounded-lg shadow-lg ${classNameSection}`}
      >
        <div>
          <h2
            className={`flex items-center justify-between w-full bg-gray-700 p-4 rounded-t-lg text-2xl text-shadow-lg/30 text-shadow-sky-300 font-bold ${classNameTitle}`}
          >
            {Title}
          </h2>
        </div>
        <div
          className={`flex flex-col gap-4 px-6 pb-6 w-full ${classNameContent}`}
        >
          {children}
        </div>
      </section>
    </>
  )
}
