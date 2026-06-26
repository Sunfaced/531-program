const CACHE_NAME = "531-training-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png",
];

// Установка сервис-воркера
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache открыт");
      return cache.addAll(urlsToCache);
    }),
  );
});

// Активация и очистка старых кешей
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

// Перехват запросов
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Если есть в кеше - возвращаем из кеша
      if (response) {
        return response;
      }

      // Иначе делаем запрос к сети
      return fetch(event.request).then((response) => {
        // Проверяем валидность ответа
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Клонируем ответ для кеша
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }),
  );
});
