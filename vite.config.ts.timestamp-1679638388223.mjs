// vite.config.ts
import { defineConfig } from "file:///C:/Users/lala/%E5%B0%88%E6%A1%88/template/typeScript-pwa/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/lala/%E5%B0%88%E6%A1%88/template/typeScript-pwa/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import eslintPlugin from "file:///C:/Users/lala/%E5%B0%88%E6%A1%88/template/typeScript-pwa/node_modules/vite-plugin-eslint/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/lala/%E5%B0%88%E6%A1%88/template/typeScript-pwa/node_modules/vite-plugin-pwa/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\lala\\\u5C08\u6848\\template\\typeScript-pwa";
var base = "/";
var vite_config_default = defineConfig({
  base,
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
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
        globPatterns: ["**/*.{js,css,html,png,json}"]
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
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsYWxhXFxcXFx1NUMwOFx1Njg0OFxcXFx0ZW1wbGF0ZVxcXFx0eXBlU2NyaXB0LXB3YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGFsYVxcXFxcdTVDMDhcdTY4NDhcXFxcdGVtcGxhdGVcXFxcdHlwZVNjcmlwdC1wd2FcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2xhbGEvJUU1JUIwJTg4JUU2JUExJTg4L3RlbXBsYXRlL3R5cGVTY3JpcHQtcHdhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWVzbGludFwiXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcbmNvbnN0IGJhc2UgPSBcIi9cIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgZXNsaW50UGx1Z2luKHsgY2FjaGU6IGZhbHNlIH0pLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICBzcmNEaXI6IFwic3JjXCIsXHJcbiAgICAgIGZpbGVuYW1lOiBcInN3LnRzXCIsXHJcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcIi9mYXZpY29uLnBuZ1wiXSxcclxuICAgICAgc3RyYXRlZ2llczogXCJpbmplY3RNYW5pZmVzdFwiLFxyXG4gICAgICBpbmplY3RNYW5pZmVzdDoge1xyXG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57anMsY3NzLGh0bWwscG5nLGpzb259XCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6IFwiUFdBLVRlbXBsYXRlXCIsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogXCJQV0EtVGVtcGxhdGVcIixcclxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgc3RhcnRfdXJsOiBiYXNlLFxyXG4gICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIuL2ljb25zL21hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIuL2ljb25zL21hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi4vaWNvbnMvbWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgcHVycG9zZTogXCJhbnlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi4vaWNvbnMvbWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1UsU0FBUyxvQkFBb0I7QUFDblcsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUN6QixTQUFTLGVBQWU7QUFKeEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxPQUFPO0FBQ2IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLGFBQWEsRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUFBLElBQzdCLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGVBQWUsQ0FBQyxjQUFjO0FBQUEsTUFDOUIsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsUUFDZCxjQUFjLENBQUMsNkJBQTZCO0FBQUEsTUFDOUM7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULGtCQUFrQjtBQUFBLFFBQ2xCLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
