// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START order_multiple_modular]
import { query, orderBy } from "firebase/firestore";  

const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));
// [END order_multiple_modular]