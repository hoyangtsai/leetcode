/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;

  let ans = Array(n).fill(0);
  let hottest = 0;

  for (let currDay = n - 1; currDay >= 0; currDay--) {
    let currentTemp = temperatures[currDay];

    if (hottest <= currentTemp) {
      hottest = currentTemp;
      continue;
    }

    let days = 1;
    while (temperatures[currDay + days] <= currentTemp) {
      days += ans[currDay + days];
    }
    
    ans[currDay] = days;
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */