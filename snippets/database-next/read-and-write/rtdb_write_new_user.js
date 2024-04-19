// This snippet file was generated by processing the source file:
// ./database-next/read-and-write.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_write_new_user_modular]
import { getDatabase } from "firebase/database";

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase(firebaseApp);
  db.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
// [END rtdb_write_new_user_modular]