"use client"

import type React from "react"
import { DashboardHeader } from "./dashboard-header"
import { DashboardNavigation } from "./dashboard-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardNavigation />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
