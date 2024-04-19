// This snippet file was generated by processing the source file:
// ./auth-next/yahoo-oauth.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_yahoo_signin_redirect_result_modular]
import { getAuth, getRedirectResult, OAuthProvider } from "firebase/auth";

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // IdP data available in result.additionalUserInfo.profile
    // ...

    // Yahoo OAuth access token and ID token can be retrieved by calling:
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
  })
  .catch((error) => {
    // Handle error.
  });
// [END auth_yahoo_signin_redirect_result_modular]