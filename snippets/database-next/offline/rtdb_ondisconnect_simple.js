// This snippet file was generated by processing the source file:
// ./database-next/offline.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_ondisconnect_simple_modular]
import { getDatabase, ref, onDisconnect } from "firebase/database";

const db = getDatabase();
const presenceRef = ref(db, "disconnectmessage");
// Write a string when this client loses connection
onDisconnect(presenceRef).set("I disconnected!");
// [END rtdb_ondisconnect_simple_modular]