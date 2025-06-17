const formatDate = (date: string | Date, hasTime = false) => {
  const d = new Date(date)
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...(hasTime && {
      hour: "2-digit",
      minute: "2-digit",
    }),
  })
}

export { formatDate }
