// This snippet file was generated by processing the source file:
// ./storage-next/create-reference.js
//
// To make edits to the snippets in this file, please edit the source

// [START storage_create_ref_modular]
import { getStorage, ref } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
// [END storage_create_ref_modular]