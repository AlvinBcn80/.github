// This snippet file was generated by processing the source file:
// ./auth-next/service-worker-sessions.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_svc_listen_activate_modular]
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
// [END auth_svc_listen_activate_modular]