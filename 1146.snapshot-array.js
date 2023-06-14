/*
 * @lc app=leetcode id=1146 lang=javascript
 *
 * [1146] Snapshot Array
 */

/**
 * tags: #design, #binary-search
 */

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.records = Array(length).fill(null).map(e => []);
  this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.records[index].push([this.snapId, val])
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const arr = this.records[index];
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid][0] <= snap_id) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right === -1 ? 0 : arr[right][1];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */