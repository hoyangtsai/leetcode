/*
 * @lc app=leetcode id=1541 lang=javascript
 *
 * [1541] Minimum Insertions to Balance a Parentheses String
 */

/**
 * tags: #stack, #greedy
 * https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/discuss/780221/Python-Simple-and-Fast-or-Time-O(n)-or-Space-O(1)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  s = s.replaceAll('))', '}');

  let count = 0;
  let openBracketCount = 0;

  for (const c of s) {
    if (c == '(') {
      openBracketCount += 1;
    } else { // case ) or }
      // For ) you need to add 1 char to get ))
      if (c == ')') {
        count += 1;
      }

      // Matching ( for ) or ))
      if (openBracketCount > 0) {
        openBracketCount -= 1;
      } else {
        // No Matching ( for ) or ))
        // Need to insert ( to balance string
        count += 1;
      }   
    }
  }

  return count + openBracketCount * 2;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */