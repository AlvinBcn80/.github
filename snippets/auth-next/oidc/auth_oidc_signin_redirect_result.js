// This snippet file was generated by processing the source file:
// ./auth-next/oidc.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_oidc_signin_redirect_result_modular]
import { getAuth, getRedirectResult, OAuthProvider } from "firebase/auth";

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // User is signed in.
    const credential = OAuthProvider.credentialFromResult(result);
    // This gives you an access token for the OIDC provider. You can use it to directly interact with that provider
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = OAuthProvider.credentialFromError(error);
    // Handle / display error.
    // ...
  });
// [END auth_oidc_signin_redirect_result_modular]