# Firestore Merge and Server Timestamp Conflict
This repository demonstrates a subtle bug in Firebase Firestore related to data synchronization and offline capabilities.  The issue occurs when attempting to update a document using `set()` with `merge: true`, while also updating a `serverTimestamp` field.  This can lead to unexpected behavior where the server timestamp gets overwritten and the data does not accurately reflect the update times.

The `bug.js` file contains the erroneous code snippet, and `bugSolution.js` provides a corrected solution.

## Problem
Merging a document while updating a `serverTimestamp` field leads to inconsistencies, resulting in inaccurate timestamps.

## Solution
Use `update()` instead of `set()` with `merge: true` when updating serverTimestamps, or avoid merging if possible.
