// This snippet file was generated by processing the source file:
// ./auth-next/index.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_make_email_credential_modular]
import { EmailAuthProvider } from "firebase/auth";

const credential = EmailAuthProvider.credential(email, password);
// [END auth_make_email_credential_modular]