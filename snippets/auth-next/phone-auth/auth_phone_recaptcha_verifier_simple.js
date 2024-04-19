// This snippet file was generated by processing the source file:
// ./auth-next/phone-auth.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_phone_recaptcha_verifier_simple_modular]
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
// [END auth_phone_recaptcha_verifier_simple_modular]