# Search in Rotated Sorted Array II

## Intuition

A Sorted nums of array `[5, 8, 8, 9, 9, 10, 12, 12, 15, 19]`<br>
After rotated the array `[10, 12, 12, 15, 19, 5, 8, 8, 9, 9]`<br>
Divide nums into 2 arrays (F and S) `[10, 12, 12, 15, 19] [5, 8, 8, 9, 9]`

All the elements of the second array S will be smaller or equal to the "first element" start of F.

- Case 1: If target > arr[start]: target exists in the first array F.
- Case 2: If target < arr[start]: target exists in the second array S.
- Case 3: If target == arr[start]: target obviously exists in the first array F, but it might also be present in the second array S.

```js
// returns true if element `target` exists in the first sorted array.
function existsInFirst(nums, start, element) {
  return nums[start] <= element;
}
```

## Algorithm

In standard binary search, we keep two pointers (i.e. start and end) to track the search scope in an arr array.<br>
We then divide the search space in three parts [start, mid), [mid, mid], (mid, end].

- Case 1: `arr[mid]` lies in F (mid in F), `target` lies in S: Since S starts after F ends, we know that element lies here: `(mid, end]`
- Case 2: `arr[mid]` lies in the S (mid in S), `target` lies in F: Similarly, we know that element lies here: `[start, mid)`
- Case 3: Both `arr[mid]` and `target` lie in F: since both of them are in same sorted array, we can compare `arr[mid]` and `target` in order to decide how to reduce search space.

  - `arr[mid] < target`: next search space `(mid, end]`
  - `arr[mid] > target`: next search space `[start, mid)`

- Case 4: Both `arr[mid]` and `target` lie in S: Again, since both of them are in same sorted array, we can compare `arr[mid]` and `target` in order to decide how to reduce search space

  - `arr[mid] > target`: next search space `[start, mid)`
  - `arr[mid] < target`: next search space `(mid, end]`

But there is a catch, if `arr[mid] = arr[start]`, then we know that `arr[mid]` might belong to both F and S and hence we cannot find the relative position of target from it.

```txt
nums = [10, 10, 10, 10, 10, 5, 8, 8, 9, 10]
F = [10, 10, 10, 10, 10], S = [5, 8, 8, 9, 10]
target = 8
next search space (start, end] = [ , 10, 10, 10, 10, 5, 8, 8, 9, 10]
```

```js
// returns true if we can reduce the search space in current binary search space
function isBinarySearchHelpful(arr, left, element) {
  return arr[left] != element;
}
```
