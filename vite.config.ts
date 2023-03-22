import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import eslintPlugin from "vite-plugin-eslint"
import { VitePWA } from 'vite-plugin-pwa'
const base = "/";
export default defineConfig({
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    eslintPlugin({ cache: false }),
    VitePWA({
      disable: false,
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",
      injectManifest: {
        globPatterns: ["**/*.{js,css,html,png,json}"],
      },
      manifest: {
        name: "PWA-Template",
        short_name: "PWA-Template",
        theme_color: "#ffffff",
        start_url: base,
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "./icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "./icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "./icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "./icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
      },
    }),
  ],
})
