/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

/**
 * #greedy, #hash-table, #two-pointers
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let last = Array(26).fill(-1);

  // check the string of s every characters last index
  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
  }

  let j = 0, anchor = 0;
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    j = Math.max(j, last[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
    if (j === i) {
      ans.push(i - anchor + 1);
      anchor = i + 1;
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */

partitionLabels("ababcbacadefegdehijhklij");