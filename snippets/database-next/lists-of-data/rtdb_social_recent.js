// This snippet file was generated by processing the source file:
// ./database-next/lists-of-data.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START rtdb_social_recent_modular]
import { getDatabase, ref, query, limitToLast } from "firebase/database";

const db = getDatabase();
const recentPostsRef = query(ref(db, 'posts'), limitToLast(100));
// [END rtdb_social_recent_modular]