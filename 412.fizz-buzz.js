/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const dividedBy3 = (i % 3 === 0);
    const dividedBy5 = (i % 5 === 0);
    if (dividedBy3 && dividedBy5) {
      res.push('FizzBuzz');
    } else if (dividedBy3) {
      res.push('Fizz');
    } else if (dividedBy5) {
      res.push('Buzz');
    } else {
      res.push(String(i));
    }
  }
  return res;
};
// @lc code=end
