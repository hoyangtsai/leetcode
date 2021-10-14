/*
 * @lc app=leetcode id=346 lang=javascript
 *
 * [346] Moving Average from Data Stream
 */

// @lc code=start
/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.window = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.window.length >= this.size) {
    this.window.shift();
  }
  this.window.push(val);

  const sum = this.window.reduce((acc, val) => acc + val);
  const avg = sum / this.window.length;
  return avg;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
// @lc code=end

