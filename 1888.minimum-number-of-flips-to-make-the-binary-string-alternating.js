/*
 * @lc app=leetcode id=1888 lang=javascript
 *
 * [1888] Minimum Number of Flips to Make the Binary String Alternating
 */

/**
 * tags: #sliding-window, #greedy
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
  const n = s.length;
  let ans1 = 0, ans2 = 0, ans = Number.MAX_VALUE;
  for (let i = 0; i < 2 * n; i++) {
    if (i % 2 != s[i % n]) ++ans1;
    if ((i + 1) % 2 != s[i % n]) ++ans2;
    if (i >= n) {
      if ((i - n) % 2 != s[i - n]) --ans1;
      if ((i - n + 1) % 2 != s[i - n]) --ans2;
    }
    if (i >= n - 1)
      ans = Math.min(ans1, ans2, ans);
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */