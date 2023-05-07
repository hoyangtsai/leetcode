/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let minSalary = Number.MAX_VALUE;
  let maxSalary = Number.MIN_VALUE;
  let sum = 0;

  for (const s of salary) {
    sum += s;
    minSalary = Math.min(s, minSalary);
    maxSalary = Math.max(s, maxSalary);
  }

  return Number.parseFloat((sum - minSalary - maxSalary) / (salary.length - 2));
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */
