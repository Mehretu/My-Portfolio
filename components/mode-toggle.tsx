"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
  <>
 {theme==="light"?(
    <Button className="flex flex-col gap-1.5 bg-slate-50  group items-start justify-center rounded-[20px] w-16 h-16 p-4 text-slate-900 hover:text-lime-500" onClick={() => setTheme("dark")}>
    <Moon className="w-6 h-6 flex-shrink-0" />
  </Button>):(
    <Button className="flex flex-col gap-1.5 bg-slate-900  group items-start justify-center rounded-[20px] w-16 h-16 p-4 text-slate-50 hover:text-lime-500" onClick={() => setTheme("light")}>
    <Sun className="w-6 h-6 flex-shrink-0" />
  </Button>

  )
 }
  </>
  )
}
