// This snippet file was generated by processing the source file:
// ./storage-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START storage_on_complete_modular]
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const imageRef = ref(storage, 'images/' + file.name);
uploadBytesResumable(imageRef, file, metadata)
  .then((snapshot) => {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log('File metadata:', snapshot.metadata);
    // Let's get a download URL for the file.
    getDownloadURL(snapshot.ref).then((url) => {
      console.log('File available at', url);
      // ...
    });
  }).catch((error) => {
    console.error('Upload failed', error);
    // ...
  });
// [END storage_on_complete_modular]