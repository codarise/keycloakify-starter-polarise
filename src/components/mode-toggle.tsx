import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className="size-6 border-none"
            onClick={toggleTheme}
        >
            {theme === "light" ? <Sun className="size-3" /> : <Moon className="size-3" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
