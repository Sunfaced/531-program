import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // Добавьте это для правильных путей
      base: "/531-program/",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "5/3/1 Тренировочная программа",
        short_name: "5/3/1",
        description: "Программа тренировок по методике 5/3/1",
        theme_color: "#f97316",
        background_color: "#0a0a0f",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "/531-program/icon-192x192.png", // ✅ Добавлен базовый путь
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/531-program/icon-512x512.png", // ✅ Добавлен базовый путь
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
    }),
  ],
  // ✅ Добавьте это для GitHub Pages
  base: "/531-program/",
});
