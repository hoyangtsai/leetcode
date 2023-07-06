/*
 * @lc app=leetcode id=2305 lang=javascript
 *
 * [2305] Fair Distribution of Cookies
 */

/**
 * tags: #backtracking
 */

// @lc code=start
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  function dfs(i, distribute, cookies, k, zeroCount) {
    // If there are not enough cookies remaining, return Integer.MAX_VALUE
    // as it leads to an invalid distribution.
    if (cookies.length - i < zeroCount) {
      return Number.MAX_VALUE;
    }

    // After distributing all cookies, return the unfairness of this
    // distribution.
    if (i == cookies.length) {
      let unfairness = Number.MIN_VALUE;
      for (const value of distribute) {
        unfairness = Math.max(unfairness, value);
      }
      return unfairness;
    }

    // Try to distribute the i-th cookie to each child, and update answer
    // as the minimum unfairness in these distributions.
    let answer = Number.MAX_VALUE;
    for (let j = 0; j < k; ++j) {
      zeroCount -= distribute[j] == 0 ? 1 : 0;
      distribute[j] += cookies[i];

      // Recursively distribute the next cookie.
      answer = Math.min(answer, dfs(i + 1, distribute, cookies, k, zeroCount));

      distribute[j] -= cookies[i];
      zeroCount += distribute[j] == 0 ? 1 : 0;
    }

    return answer;
  }

  let distribute = new Array(k).fill(0);
  return dfs(0, distribute, cookies, k, k);
};
// @lc code=end


/**
 * - Time complexity: O(k^n)
 * - Space complexity: O(k + n)
 */