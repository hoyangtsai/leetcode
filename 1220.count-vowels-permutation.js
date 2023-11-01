/*
 * @lc app=leetcode id=1220 lang=javascript
 *
 * [1220] Count Vowels Permutation
 */

/**
 * tags: #dynamic-programming, #bottom-up-dp
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const MOD = 1e9 + 7;

  let aCount = 1, eCount = 1, iCount = 1, oCount = 1, uCount = 1;

  for (let i = 1; i < n; i++) {
    let aCountNew = eCount;
    let eCountNew = (aCount + iCount) % MOD;
    let iCountNew = (aCount + eCount + oCount + uCount) % MOD;
    let oCountNew = (iCount + uCount) % MOD;
    let uCountNew = aCount;

    aCount = aCountNew;
    eCount = eCountNew;
    iCount = iCountNew;
    oCount = oCountNew;
    uCount = uCountNew;
  }

  return (aCount + eCount + iCount + oCount + uCount) % MOD;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */