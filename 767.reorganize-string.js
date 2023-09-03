/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

/**
 * tags: #priority-queue
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  let charCounts = {};
  for (const c of s) {
    charCounts[c] = (charCounts[c] || 0) + 1;
  }

  let pq = [];
  for (const [char, counts] of Object.entries(charCounts)) {
    pq.push([char, counts]);
  }

  // sorting in descending order by occurrences
  pq.sort((a, b) => b[1] - a[1]);

  var res = '';
  while (pq.length > 0) {
    const first = pq.shift();
    const lastChar = res[res.length - 1];
    if (res.length == 0 || first[0] != lastChar) {
      res += first[0];
      if (first[1] != 1) {
        pq.push([first[0], first[1] - 1]);
      }
    } else {
      const second = pq.shift();
      if (!second) return '';
      res += second[0];
      pq.push(first);
      if (second[1] != 1) {
        pq.push([second[0], second[1] - 1]);
      }
    }

    // sorting by occurrences again
    pq.sort((a, b) => b[1] - a[1]);
  } 

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(N * log K)
 * - Space complexity: O(k)
 */