// This snippet file was generated by processing the source file:
// ./auth-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_sign_out_modular]
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
// [END auth_sign_out_modular]