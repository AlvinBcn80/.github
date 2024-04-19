// This snippet file was generated by processing the source file:
// ./database-next/read-and-write.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_social_star_increment_modular]
function addStar(uid, key) {
  import { getDatabase, increment, ref, update } from "firebase/database";
  const dbRef = ref(getDatabase());

  const updates = {};
  updates[`posts/${key}/stars/${uid}`] = true;
  updates[`posts/${key}/starCount`] = increment(1);
  updates[`user-posts/${key}/stars/${uid}`] = true;
  updates[`user-posts/${key}/starCount`] = increment(1);
  update(dbRef, updates);
}
// [END rtdb_social_star_increment_modular]