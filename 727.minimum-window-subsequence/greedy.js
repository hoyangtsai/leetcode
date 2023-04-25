/*
 * @lc app=leetcode id=727 lang=javascript
 *
 * [727] Minimum Window Subsequence
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s1, s2) {
  const n = s1.length, m = s2.length;

  // s1 indices map
  let indices = new Map();
  for (let i = 0; i < n; i++) {
    const c = s1.charAt(i);
    if (!indices.has(c)) {
      indices.set(c, []);
    }
    indices.get(c).push(i);
  }

  let answer = '';
  let ind = new Array(m).fill(0);
  for (let start = 0; start < n; start++) {
    let prev = start - 1;
    for (let j = 0; j < m; j++) {
      if (!indices.has(s2.charAt(j))) {
        return "";
      }
      let curIndices = indices.get(s2.charAt(j));
      while (ind[j] < curIndices.length && curIndices[ind[j]] <= prev) {
        ind[j]++;
      }
      if (ind[j] == curIndices.length) {
        return answer;
      }
      prev = curIndices[ind[j]];
    }
    if (answer == '' || prev - start + 1 < answer.length) {
      answer = s1.substring(start, prev + 1);
    }
  }
  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n * m).
 * - Space complexity: O(n).
 */