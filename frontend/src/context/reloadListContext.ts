import { createContext } from "react"

type ReloadContextType = {
  reloadList: boolean
  setReloadList: React.Dispatch<React.SetStateAction<boolean>>
}

export const reloadListContext = createContext<ReloadContextType | null>(null)