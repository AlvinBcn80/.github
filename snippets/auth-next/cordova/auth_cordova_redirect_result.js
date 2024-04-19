// This snippet file was generated by processing the source file:
// ./auth-next/cordova.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_cordova_redirect_result_modular]
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);
getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {        
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
// [END auth_cordova_redirect_result_modular]