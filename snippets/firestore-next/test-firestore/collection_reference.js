// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START collection_reference_modular]
import { collection } from "firebase/firestore";

const usersCollectionRef = collection(db, 'users');
// [END collection_reference_modular]