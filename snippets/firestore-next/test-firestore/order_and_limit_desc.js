// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START order_and_limit_desc_modular]
import { query, orderBy, limit } from "firebase/firestore";  

const q = query(citiesRef, orderBy("name", "desc"), limit(3));
// [END order_and_limit_desc_modular]