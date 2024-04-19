// This snippet file was generated by processing the source file:
// ./database-next/lists-of-data.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START rtdb_social_most_viewed_modular]
import { getDatabase, ref, query, orderByChild } from "firebase/database";

const db = getDatabase();
const mostViewedPosts = query(ref(db, 'posts'), orderByChild('metrics/views'));
// [END rtdb_social_most_viewed_modular]