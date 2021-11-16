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
  let stack = [];

  for (let currDay = 0; currDay < n; currDay++) {
    let currentTemp = temperatures[currDay];

    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currentTemp) {
      let prevDay = stack.pop();
      ans[prevDay] = currDay - prevDay;
    }
    
    stack.push(currDay);
  }

  return ans;
};
// @lc code=end

