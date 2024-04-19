// This snippet file was generated by processing the source file:
// ./auth-next/microsoft-oauth.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_msft_signin_redirect_result_modular]
import { getAuth, getRedirectResult, OAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);
getRedirectResult(auth)
  .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.

    // Get the OAuth access token and ID Token
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
  })
  .catch((error) => {
    // Handle error.
  });
// [END auth_msft_signin_redirect_result_modular]