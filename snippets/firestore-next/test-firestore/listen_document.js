// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START listen_document_modular]
import { collection, doc, onSnapshot } from "firebase/firestore";

const unsub = onSnapshot(doc(collection(db, "cities"), "SF"), (doc) => {
    console.log("Current data: ", doc.data());
});
// [END listen_document_modular]