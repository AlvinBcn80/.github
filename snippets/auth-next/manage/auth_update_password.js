// This snippet file was generated by processing the source file:
// ./auth-next/manage.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_update_password_modular]
import { getAuth, updatePassword } from "firebase/auth";

const auth = getAuth();

const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

updatePassword(user, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});
// [END auth_update_password_modular]