/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */

/**
 * tags: #design, #heap, #priority-queue, #binary-search
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = nums;
  this.heap.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let l = 0, r = this.heap.length;
  while(l < r) {
    let mid = parseInt((l + r) / 2);
    if (this.heap[mid] < val) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  this.heap.splice(l, 0, val);

  // if (this.heap.length < this.k) {
  //   return null;
  // } else {
  //   return this.heap[this.heap.length - this.k];
  // }

  if (this.heap.length > this.k) {
    this.heap.splice(0, this.heap.length - this.k);
  }

  return this.heap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

