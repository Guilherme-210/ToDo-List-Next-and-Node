const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return {
        text: "text-yellow-500",
        bg: "bg-yellow-500",
        bgHover: "hover:bg-yellow-700",
      }
    case "Expired":
      return {
        text: "text-red-500",
        bg: "bg-red-500",
        bgHover: "hover:bg-red-600",
      }
    case "Completed":
      return {
        text: "text-green-500",
        bg: "bg-green-500",
        bgHover: "hover:bg-green-600",
      }
    default:
      return {
        text: "text-gray-500",
        bg: "bg-gray-500",
        bgHover: "hover:bg-gray-700",
      }
  }
}

export { getStatusColor }
