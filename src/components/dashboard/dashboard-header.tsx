"use client";

import { useContext, useState } from "react";
import { Search, Plus, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../theme-toggle";
import { ContextApi } from "@/context/auth";
import Link from "next/link";
export function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  const { destructToken, user }: any = useContext(ContextApi);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-color flex items-center justify-center">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          <span className="font-semibold">AuthAPI</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64"
            />
          </div>

          <Button className="bg-color hover:bg-color/90 text-white ">
            <Link href="/dashboard/new-project" className="flex flex-row">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Link>
          </Button>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex p-6 items-center gap-2 cursor-pointer"
              >
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden sm:inline-block">
                  {user?.name?.length > 15
                    ? `${user.name.slice(0, 15)}...`
                    : user?.name}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="cursor-pointer">
              <DropdownMenuItem onClick={destructToken}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
