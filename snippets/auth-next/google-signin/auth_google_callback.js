// This snippet file was generated by processing the source file:
// ./auth-next/google-signin.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_google_callback_modular]
import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();

function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      const credential = GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);

      // Sign in with credential from the Google user.
      signInWithCredential(auth, credential).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The credential that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}
// [END auth_google_callback_modular]