The solution involves using `update()` instead of `set()` with `merge: true` to update documents when dealing with server timestamps.  This ensures the timestamp isn't overwritten unnecessarily.

```javascript
// Corrected usage
db.collection('myCollection').doc('myDoc').update({
  dataField: 'newData'
})
.then(() => {
  console.log('Data updated successfully!');
})
.catch(error => {
  console.error('Error updating data:', error);
});
```

This approach correctly updates the `dataField` without interfering with the existing `serverTimestamp` field.  Alternatively, if you need to merge other fields, handle the `serverTimestamp` field separately to maintain accuracy.
