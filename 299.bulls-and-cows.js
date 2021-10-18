/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @google
// #hash-table, #string
// #google-interview

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let secretMap = new Map();
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    const sc = secret[i];
    const gc = guess[i];
    
    if (sc == gc) {
      bulls += 1;
    } else {
      if (secretMap.get(sc) < 0) {
        cows++;
      }
      if (secretMap.get(gc) > 0) {
        cows++;
      }
      secretMap.set(sc, (secretMap.get(sc) || 0) + 1);
      secretMap.set(gc, (secretMap.get(gc) || 0) - 1);
    }
  }

  console.log('secretMap =>', secretMap);

  return `${bulls}A${cows}B`;
};
// @lc code=end


/**
 * Hash Table: One Pass
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */

