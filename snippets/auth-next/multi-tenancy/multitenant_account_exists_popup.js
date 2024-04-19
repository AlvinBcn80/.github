// This snippet file was generated by processing the source file:
// ./auth-next/multi-tenancy.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START multitenant_account_exists_popup_modular]
import { signInWithPopup, fetchSignInMethodsForEmail, linkWithCredential } from "firebase/auth";
// Step 1.
// User tries to sign in to the SAML provider in that tenant.
auth.tenantId = 'TENANT_ID';
signInWithPopup(auth, samlProvider)
  .catch((error) => {
    // An error happened.
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Step 2.
      // User's email already exists.
      // The pending SAML credential.
      const pendingCred = error.credential;
      // The credential's tenantId if needed: error.tenantId
      // The provider account's email address.
      const email = error.email;
      // Get sign-in methods for this email.
      fetchSignInMethodsForEmail(email, auth)
        .then((methods) => {
          // Step 3.
          // Ask the user to sign in with existing Google account.
          if (methods[0] == 'google.com') {
            signInWithPopup(auth, googleProvider)
              .then((result) => {
                // Step 4
                // Link the SAML AuthCredential to the existing user.
                linkWithCredential(result.user, pendingCred)
                  .then((linkResult) => {
                    // SAML account successfully linked to the existing
                    // user.
                    goToApp();
                  });
              });
          }
        });
    }
  });
// [END multitenant_account_exists_popup_modular]