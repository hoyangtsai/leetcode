/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

/**
 * @Nvidia
 * tags: #priority-queue, #heap
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let cnt = {};
  for (const word of words) {
    cnt[word] = (cnt[word] || 0) + 1;
  }

  let res = Object.keys(cnt).sort((a, b) => {
    let countCompare = cnt[b] - cnt[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
  });
  
  return res.slice(0, k);
};
// @lc code=end


/**
 * - Time complexity: O(N log k).
 * - Space complexity: O(N).
 */