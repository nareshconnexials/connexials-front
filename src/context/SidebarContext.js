import React, { useState, useMemo } from 'react'

// create context
export const SidebarContext = React.createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isRole, setIsRole] = useState("")

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      isRole,
      setIsRole
    }),
    [isSidebarOpen]
  )

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
