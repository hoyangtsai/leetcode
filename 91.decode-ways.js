/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

/**
 * tags: #dynamic-programming, #string-combination
 * {@link 17.letter-combinations-of-a-phone-number.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] == '0') return 0;
  if (s.length == 1) return 1;
  
  const n = s.length;

  // let dp = new Array(n + 1).fill(0);
  // dp[0] = 1;
  // dp[1] = 1;
  
  let twoBack = 1;
  let oneBack = 1;

  // start second character
  for (let i = 1; i < n; i++) {
    let current = 0;
    if (s[i] != '0') {
      // dp[i + 1] += dp[i];
      current += oneBack;
    }

    let twoDigit = parseInt(s.substring(i - 1, i + 1));
    if (twoDigit >= 10 && twoDigit <= 26) {
      // dp[i + 1] += dp[i - 1];
      current += twoBack;
    }
    twoBack = oneBack;
    oneBack = current;
  }

  // return dp[n];
  return oneBack;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */


// numDecodings('226');
numDecodings('12');
// numDecodings('2125');

/**
 * A = 1, B = 2, C = 3,
 * D = 4, E = 5, F = 6,
 * G = 7, H = 8, I = 9,
 * J = 10, K = 11, L = 12
 * M = 13, N = 14, O = 15
 * P = 16, Q = 17, R = 18,
 * S = 19, T = 20, U = 21
 * V = 22, W = 23, X = 24,
 * Y = 25, Z = 26
 */