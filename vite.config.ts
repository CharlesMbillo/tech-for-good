import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "n65rv6-8080.csb.app", // Your CodeSandbox host
      "localhost", // Default localhost
    ],
  },
});
