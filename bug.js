The following code snippet demonstrates an uncommon Firebase error related to data synchronization and offline capabilities.  The issue occurs when attempting to update a document using `set()` with `merge: true`, but the server-side timestamp is modified unexpectedly, causing data inconsistencies.

```javascript
// Incorrect usage
db.collection('myCollection').doc('myDoc').set({
  dataField: 'newData',
  serverTimestamp: firebase.firestore.FieldValue.serverTimestamp()
}, { merge: true })
.then(() => {
  console.log('Data updated successfully!');
})
.catch(error => {
  console.error('Error updating data:', error);
});
```

The problem lies in attempting to merge a server timestamp. The `FieldValue.serverTimestamp()` generates a new timestamp on the client, and `merge: true` doesn't properly handle updating this field with a new value. When merging, an existing server timestamp is often unintentionally overwritten by the client-generated one, leading to data that doesn't reflect the actual update times.
