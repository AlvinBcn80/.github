// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START get_custom_object_modular]
import { doc, collection, getDoc} from "firebase/firestore"; 

const ref = doc(collection(db, "cities"), "LA").withConverter(cityConverter);
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
  // Convert to City object
  const city = docSnap.data();
  // Use a City instance method
  console.log(city.toString());
} else {
  console.log("No such document!")
}
// [END get_custom_object_modular]