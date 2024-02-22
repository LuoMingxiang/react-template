import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";
// import presetAttributify from "@unocss/preset-attributify";
// import presetUno from "@unocss/preset-uno";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["react", "react-router-dom", "react-i18next", "ahooks"],
      dts: "./src/auto-imports.d.ts",
      // dirs: ['src/layouts', 'src/views'],
      eslintrc: {
        enabled: true,
      },
      defaultExportByFilename: true,
      resolvers: [],
    }),
    UnoCSS({
      configFile: "./uno.config.ts",
      // presets: [presetUno(), presetAttributify()],
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
