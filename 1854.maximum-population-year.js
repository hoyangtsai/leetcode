/*
 * @lc app=leetcode id=1854 lang=javascript
 *
 * [1854] Maximum Population Year
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  let year = new Array(2051).fill(0);

  // O(n) -> n is log.length

  for (const log of logs) {
    year[log[0]] += 1;
    year[log[1]] -= 1;
  }

  let maxNum = year[1950], maxYear = 1950;

  // O(100) -> 2050 - 1950 = 100

  for (let i = 1951; i < year.length; i++) {
    year[i] += year[i - 1];  // Generating Prefix Sum
    
    if (year[i] > maxNum) {
      maxNum = year[i];
      maxYear = i;
    }
  }

  return maxYear;
};
// @lc code=end


/**
 * - Time complexity: O(n + range of year).
 * - Space complexity: O(1).
 */