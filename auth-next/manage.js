// [SNIPPET_REGISTRY disabled]
// [SNIPPETS_SEPARATION enabled]

function getUserProfile() {
  // [START auth_get_user_profile]
  const { getAuth } = require("firebase/auth");

  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  // [END auth_get_user_profile]
}

function getUserProfileProvider() {
  // [START auth_get_user_profile_provider]
  const { getAuth } = require("firebase/auth");

  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
  // [END auth_get_user_profile_provider]
}

function updateUserProfile() {
  // [START auth_update_user_profile]
  const { getAuth, updateProfile } = require("firebase/auth");
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
  // [END auth_update_user_profile]
}

function updateUserEmail() {
  // [START auth_update_user_email]
  const { getAuth, updateEmail } = require("firebase/auth");
  const auth = getAuth();
  updateEmail(auth.currentUser, "user@example.com").then(() => {
    // Email updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
  // [END auth_update_user_email]
}
