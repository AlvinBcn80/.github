// This snippet file was generated by processing the source file:
// ./auth-next/manage.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_update_user_email_modular]
import { getAuth, updateEmail } from "firebase/auth";
const auth = getAuth();
updateEmail(auth.currentUser, "user@example.com").then(() => {
  // Email updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
// [END auth_update_user_email_modular]