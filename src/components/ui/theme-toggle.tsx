import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "@/lib/hooks";

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
