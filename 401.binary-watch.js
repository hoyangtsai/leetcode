/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

/**
 * tags: #bitwise-operation, #bit-manipulation
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const result = [];
  // 11 = 1011 = 8 + 2 + 1
  for (let h = 0; h < 12; h++) {
    // 59 = 111011 = 32 + 16 + 8 + 2 + 1
    // maximum digit is 6 and 5 digits of 1's
    for (let m = 0; m < 60; m++) {
      const hOnes = h ? h.toString(2).match(/1/g).length : 0;
      const mOnes = m ? m.toString(2).match(/1/g).length : 0;
      if (hOnes + mOnes === turnedOn) {
        result.push(`${h}:${String(m).padStart(2, '0')}`);
      }
    }
  }
  return result; 
};
// @lc code=end

