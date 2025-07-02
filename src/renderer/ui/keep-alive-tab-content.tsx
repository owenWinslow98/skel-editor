import React from "react"
import { cn } from "../lib/utils"

type Props = {
  value: string
  activeValue: string
  className?: string
  children: React.ReactNode
}

export function KeepAliveTabsContent({ value, activeValue, className, children }: Props) {
  const isActive = value === activeValue

  return (
    <div
      data-state={isActive ? "active" : "inactive"}
      className={cn("shadcn-tabs-content", isActive ? "block" : "hidden", className)}
    >
      {children}
    </div>
  )
}
