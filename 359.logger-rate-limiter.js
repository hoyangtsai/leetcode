/*
 * @lc app=leetcode id=359 lang=javascript
 *
 * [359] Logger Rate Limiter
 */

/**
 * tags: #design
 */

// @lc code=start

var Logger = function() {
  this.log = new Map();
  this.idle = 10;
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (!this.log.has(message)) {
    this.log.set(message, timestamp);
    return true;
  }

  let prevTimestamp = this.log.get(message);
  if (timestamp - prevTimestamp >= this.idle) {
    this.log.set(message, timestamp);
    return true;
  } else {
    return false;
  }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
// @lc code=end

