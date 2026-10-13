// Service worker minimal : nécessaire pour que Chrome propose "Installer l'application".
// Il ne met rien en cache : l'appli utilise toujours la version en ligne la plus récente.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* réseau normal */ });
