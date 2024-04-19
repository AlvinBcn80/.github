// This snippet file was generated by processing the source file:
// ./database-next/lists-of-data.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_social_most_starred_modular]
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

const myUserId = auth.currentUser.uid;
const topUserPostsRef = db.ref('user-posts/' + myUserId).orderByChild('starCount');
// [END rtdb_social_most_starred_modular]