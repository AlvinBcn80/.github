// This snippet file was generated by processing the source file:
// ./auth-next/twitter.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_twitter_signin_popup_modular]
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
// [END auth_twitter_signin_popup_modular]