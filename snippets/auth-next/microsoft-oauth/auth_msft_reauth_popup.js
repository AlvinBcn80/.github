// This snippet file was generated by processing the source file:
// ./auth-next/microsoft-oauth.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_msft_reauth_popup_modular]
import { getAuth, reauthenticateWithPopup, OAuthProvider } from "firebase/auth";

const provider = new OAuthProvider('microsoft.com');
const auth = getAuth(firebaseApp);
reauthenticateWithPopup(auth.currentUser, provider)
    .then((result) => {
      // User is re-authenticated with fresh tokens minted and
      // should be able to perform sensitive operations like account
      // deletion and email or password update.
      // IdP data available in result.additionalUserInfo.profile.

      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
    })
    .catch((error) => {
      // Handle error.
    });
// [END auth_msft_reauth_popup_modular]