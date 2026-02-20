import { Moon, Sun, Monitor, Eye } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    const handleTheme = (newTheme: string) => {
        // next-themes handles class toggling; we also need to clear non-standard classes
        const root = document.documentElement;
        root.classList.remove("dark", "light", "high-contrast");

        if (newTheme === "high-contrast") {
            root.classList.add("high-contrast");
            localStorage.setItem("theme", "high-contrast");
            // next-themes doesn't know about high-contrast, so we set to dark as base
            setTheme("dark");
        } else {
            root.classList.add(newTheme === "light" ? "light" : "dark");
            localStorage.setItem("theme", newTheme);
            setTheme(newTheme);
        }
    };

    const currentIsHC = typeof window !== "undefined" && document.documentElement.classList.contains("high-contrast");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="glass-card border-glass-border hover:border-primary/30 transition-all glow-hover"
                >
                    {currentIsHC ? (
                        <Eye className="h-[1.1rem] w-[1.1rem]" />
                    ) : (
                        <>
                            <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </>
                    )}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card border-glass-border">
                <DropdownMenuItem onClick={() => handleTheme("light")} className="gap-2 cursor-pointer">
                    <Sun className="h-4 w-4" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTheme("dark")} className="gap-2 cursor-pointer">
                    <Moon className="h-4 w-4" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTheme("system")} className="gap-2 cursor-pointer">
                    <Monitor className="h-4 w-4" /> System
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleTheme("high-contrast")} className="gap-2 cursor-pointer">
                    <Eye className="h-4 w-4" /> High Contrast
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
