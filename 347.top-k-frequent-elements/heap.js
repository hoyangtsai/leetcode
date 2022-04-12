/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

/**
 * tags: #heap
 * {@link 215.kth-largest-element-in-an-array/heap.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // set each number of nums occurrences as a key
  let numMap = {};
  for (let n of nums) {
    numMap[n] = (numMap[n] || 0) + 1;
  }

  // sort ascendant occurrences by values and return a array of the keys
  let sortedKeyHeap = Object.keys(numMap).sort((a, b) => numMap[a] - numMap[b]);

  let result = [];
  while (result.length < k && sortedKeyHeap.length != 0) {
    result.push(sortedKeyHeap.pop());
  }

  return result;
};
// @lc code=end


/**
 * - Time complexity: O(N log K).
 * - Space complexity: O(K).
 */