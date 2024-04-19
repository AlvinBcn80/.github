// This snippet file was generated by processing the source file:
// ./auth-next/manage.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_delete_user_modular]
import { getAuth, deleteUser } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

deleteUser(user).then(() => {
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});
// [END auth_delete_user_modular]