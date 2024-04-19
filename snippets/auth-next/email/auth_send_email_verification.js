// This snippet file was generated by processing the source file:
// ./auth-next/email.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_send_email_verification_modular]
import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth(firebaseApp);
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
// [END auth_send_email_verification_modular]