// This snippet file was generated by processing the source file:
// ./functions-next/callable.js
//
// To make edits to the snippets in this file, please edit the source

// [START functions_call_add_message_modular]
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions(firebaseApp);
const addMessage = httpsCallable(functions, 'addMessage');
addMessage({ text: messageText })
  .then((result) => {
    // Read result of the Cloud Function.
    const sanitizedMessage = result.data.text;
  });
// [END functions_call_add_message_modular]