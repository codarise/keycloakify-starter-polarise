import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "Single-Page",
            themeName: "polarise-theme",
            keycloakVersionTargets: {
                "22-to-25": "polarise-theme-22-to-25.jar",
                "all-other-versions": "polarise-theme.jar"
            }
        })
    ]
});
