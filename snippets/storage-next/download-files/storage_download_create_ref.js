// This snippet file was generated by processing the source file:
// ./storage-next/download-files.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START storage_download_create_ref_modular]
import { getStorage, ref } from "firebase/storage";

// Create a reference with an initial file path and name
const storage = getStorage();
const pathReference = ref(storage, 'images/stars.jpg');

// Create a reference from a Google Cloud Storage URI
const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');  
// [END storage_download_create_ref_modular]