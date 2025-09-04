"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BarChart3, Activity, Settings, FolderOpen } from "lucide-react"

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    name: "Usage",
    href: "/dashboard/usage",
    icon: Activity,
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: FolderOpen,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNavigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors",
                  isActive
                    ? "border-violet-400 text-violet-600 dark:text-violet-400"
                    : "border-transparent text-muted-foreground hover:border-muted-foreground hover:text-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
