import todoChecklist from "@/data/List";
import Card from "./card";

export default function List({
  className = "",
}: Readonly<{
  className?: string
}>) {
  
  return (
    <ul
      className={`flex flex-col gap-2 w-full overflow-y-auto max-h-[calc(100vh-200px)] ${className}`}
    >
      {todoChecklist.map((todo, index) => (
        <Card
          key={todo.id || index}
          title={todo.title}
          description={todo.description}
          addDate={todo.addDate} 
          deliveryDate={todo.deliveryDate} 
        />
      ))}
    </ul>
  )
}