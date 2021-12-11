/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start

var MedianFinder = function() {
  this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const binarySearch = (n) => {
    let left = 0;
    let right = this.arr.length;
    while (left < right) {
      let mid = parseInt((left + right) / 2);
      if (n > this.arr[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    this.arr.splice(left, 0, n);
  }

  if (this.arr.length === 0) {
    this.arr.push(num);
  } else {
    binarySearch(num);
  } 
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const mid = parseInt(this.arr.length / 2);

  // check the arr length is even or odd
  return (this.arr.length % 2 === 0) ? (this.arr[mid - 1] + this.arr[mid]) / 2 : this.arr[mid];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

