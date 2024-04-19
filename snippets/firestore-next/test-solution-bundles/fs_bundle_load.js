// This snippet file was generated by processing the source file:
// ./firestore-next/test.solution-bundles.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START fs_bundle_load_modular]
import { loadBundle, namedQuery, getDocsFromCache } from "firebase/firestore";

async function fetchFromBundle() {
  // Fetch the bundle from Firebase Hosting, if the CDN cache is hit the 'X-Cache'
  // response header will be set to 'HIT'
  const resp = await fetch('/createBundle');

  // Load the bundle contents into the Firestore SDK
  await loadBundle(db, resp.body);

  // Query the results from the cache
  const query = await namedQuery(db, 'latest-stories-query');
  const storiesSnap = await getDocsFromCache(query);

  // Use the results
  // ...
}
// [END fs_bundle_load_modular]