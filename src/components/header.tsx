import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky w-full top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 justify-between mx-4 i text-center ">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">AuthAPI</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#example" className="text-sm font-medium hover:text-primary transition-colors">
            Example
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Button
            size="sm"
            className="bg-lime-400 text-black hover:bg-lime-500 dark:bg-lime-400 dark:text-black dark:hover:bg-lime-500"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
