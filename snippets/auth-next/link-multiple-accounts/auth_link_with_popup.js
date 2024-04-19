// This snippet file was generated by processing the source file:
// ./auth-next/link-multiple-accounts.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_link_with_popup_modular]
import { getAuth, linkWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const auth = getAuth();
linkWithPopup(auth.currentUser, provider).then((result) => {
  // Accounts successfully linked.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  // ...
});
// [END auth_link_with_popup_modular]