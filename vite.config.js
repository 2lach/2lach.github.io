import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: "/",
  // serve files from `public` (same as CRA)
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    // keep CRA-compatible output folder name
    outDir: "build",
    // align with CRA static asset layout
    assetsDir: "static",
    rollupOptions: {
      output: {
        entryFileNames: "static/js/[name].[hash].js",
        chunkFileNames: "static/js/[name].[hash].chunk.js",
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name || "");
          if (ext === ".css") return "static/css/[name].[hash][extname]";
          if (
            [".png", ".jpg", ".jpeg", ".svg", ".gif", ".webp", ".ico"].includes(
              ext
            )
          )
            return "static/media/[name].[hash][extname]";
          return "static/media/[name].[hash][extname]";
        },
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  // Vitest configuration
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
  },
}));
