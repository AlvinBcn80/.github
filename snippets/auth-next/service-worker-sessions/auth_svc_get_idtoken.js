// This snippet file was generated by processing the source file:
// ./auth-next/service-worker-sessions.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_svc_get_idtoken_modular]
import { getAuth, getIdToken } from "firebase/auth";

const auth = getAuth();
getIdToken(auth.currentUser)
  .then((idToken) => {
    // idToken can be passed back to server.
  })
  .catch((error) => {
    // Error occurred.
  });
// [END auth_svc_get_idtoken_modular]