// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_paginate]
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";  

// Query the first page of docs
const first = query(collection(db, "cities"), orderBy("population"), limit(25));
const documentSnapshots = await getDocs(first);

// Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
console.log("last", lastVisible);

// Construct a new query starting at this document,
// get the next 25 cities.
const next = query(collection(db, "cities"),
    orderBy("population"),
    startAfter(lastVisible),
    limit(25));
// [END modular_paginate]