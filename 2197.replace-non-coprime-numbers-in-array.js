/*
 * @lc app=leetcode id=2197 lang=javascript
 *
 * [2197] Replace Non-Coprime Numbers in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
  const gcd = (a, b) => {
    while (b != 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const lcm = (a, b) => {
    return (a / gcd(a, b)) * b;
  };

  const stack = [];
  for (const num of nums) {
    let current = num;
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
      const g = gcd(top, current);
      if (g == 1) {
        break;
      }
      current = lcm(top, current);
      stack.pop();
    }
    stack.push(current);
  }

  return stack;
};
// @lc code=end

