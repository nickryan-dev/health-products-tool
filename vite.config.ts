import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Required for DOM-related tests
    setupFiles: "./src/test/setup.ts", // Optional: Test setup
  },
  server: {
    host : '127.0.0.1',
    port: 3000,
  },
});
