/*
 * @lc app=leetcode id=1569 lang=javascript
 *
 * [1569] Number of Ways to Reorder Array to Get Same BST
 */

/**
 * tags: #divide-and-conquer, #binary-tree
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  const mod = BigInt(10 ** 9 + 7);

  const factorial = new Array(nums.length + 1).fill(1n);

  for (let i = 1; i < factorial.length; ++i) {
    if (i === 0) {
      continue;
    }
    factorial[i] = BigInt(factorial[i - 1] * BigInt(i));
  }

  function comb(nl, nr) {
    const top = factorial[nl + nr];
    const left = factorial[nl];
    const right = factorial[nr];
    return top / left / right;
  }

  function ways(arr) {
    if (arr.length <= 2) {
      return 1n;
    }

    const root = arr[0];
    const left = arr.filter((a) => a < root);
    const right = arr.filter((a) => a > root);
    const combVal = comb(left.length, right.length);
    return BigInt(ways(left) * ways(right) * combVal) % mod;
  }

  return (ways(nums) - 1n);
};
// @lc code=end

