/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
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
  let bookings = [...this.heap, [start, end]];
  bookings.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  for (let i = 1; i < bookings.length; i++) {
    const prev = bookings[i - 1];
    const curr = bookings[i];
    if (prev[1] > curr[0]) {
      return false;
    }
  }

  this.heap = bookings;
  return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

