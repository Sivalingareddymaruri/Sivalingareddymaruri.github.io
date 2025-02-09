import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from external networks
    port: 5173, // Your Vite dev server port
    allowedHosts: ['.codesandbox.io'], // Allow CodeSandbox URLs
  },
});
