// This snippet file was generated by processing the source file:
// ./firestore-next/test.solution-geoqueries.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START fs_geo_query_hashes_modular]
import { collection, query, orderBy, startAt, endAt, getDocs } from 'firebase/firestore';

// Find cities within 50km of London
const center = [51.5074, 0.1278];
const radiusInM = 50 * 1000;

// Each item in 'bounds' represents a startAt/endAt pair. We have to issue
// a separate query for each pair. There can be up to 9 pairs of bounds
// depending on overlap, but in most cases there are 4.
const bounds = geofire.geohashQueryBounds(center, radiusInM);
const promises = [];
for (const b of bounds) {
  const q = query(
    collection(db, 'cities'), 
    orderBy('geohash'), 
    startAt(b[0]), 
    endAt(b[1]));

  promises.push(getDocs(q));
}

// Collect all the query results together into a single list
const snapshots = await Promise.all(promises);

const matchingDocs = [];
for (const snap of snapshots) {
  for (const doc of snap.docs) {
    const lat = doc.get('lat');
    const lng = doc.get('lng');

    // We have to filter out a few false positives due to GeoHash
    // accuracy, but most will match
    const distanceInKm = geofire.distanceBetween([lat, lng], center);
    const distanceInM = distanceInKm * 1000;
    if (distanceInM <= radiusInM) {
      matchingDocs.push(doc);
    }
  }
}
// [END fs_geo_query_hashes_modular]