import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ui/theme-provider"

interface ModeToggleProps {
    className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme") || "system";

  // handle theme toggle
  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="outline" size="icon" onClick={handleToggleTheme} className={className}>
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
    </Button>
  )
}