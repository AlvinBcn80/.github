// This snippet file was generated by processing the source file:
// ./messaging-next/index.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START messaging_delete_token_modular]
import { getMessaging, deleteToken } from "firebase/messaging";

const messaging = getMessaging();
deleteToken(messaging).then(() => {
  console.log('Token deleted.');
  // ...
}).catch((err) => {
  console.log('Unable to delete token. ', err);
});
// [END messaging_delete_token_modular]