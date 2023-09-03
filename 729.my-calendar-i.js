/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

/**
 * tags: #design, #binary-search, #meeting
 */

// @lc code=start

var MyCalendar = function() {
  this.heap = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  let l = 0, r = this.heap.length - 1;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    const [s, e] = this.heap[mid];
    if (start < e && end > s) {
      return false;
    }
    if (end <= s) {
      r = mid - 1;
    } else if (start >= e) {
      l = mid + 1;
    }
  }
  // The splice makes it O(n)
  this.heap.splice(l, 0, [start, end]);
  return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end


/**
 * - Time complexity: O(N Log N).
 * - Space complexity: O(1).
 */