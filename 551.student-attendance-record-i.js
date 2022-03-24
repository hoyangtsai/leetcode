/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countAbsent = 0, countLate = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'L') {
      countLate++;
    } else {
      if (s.charAt(i) == 'A') countAbsent++;
      countLate = 0;
    }

    if (countAbsent >= 2 || countLate >= 3) return false;
  }

  return true;
};
// @lc code=end



const ans = checkRecord("AA");
console.log('ans :>> ', ans);