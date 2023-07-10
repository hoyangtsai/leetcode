/*
 * @lc app=leetcode id=2542 lang=javascript
 *
 * [2542] Maximum Subsequence Score
 */

/**
 * tags: #priority-queue, #heap
 */

// https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages
// https://github.com/datastructures-js/priority-queue

// @lc code=start
const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
  const n = nums1.length;
  let pairs = Array.from(Array(n), () => Array(2));
  for (let i = 0; i < n; i++) {
    pairs[i] = [nums1[i], nums2[i]];
  }
  pairs.sort((a, b) => b[1] - a[1]);

  let topKHeap = new MinPriorityQueue();
  let topKSum = 0;
  for (let i = 0; i < k; ++i) {
    topKSum += pairs[i][0]; // nums1[i]
    
    // Keep the heap size same as k
    // if (topKHeap.size() > k) topKHeap.dequeue();
    topKHeap.enqueue(pairs[i][0]);
  }

  // The score of the first k pairs.
  let answer = topKSum * pairs[k - 1][1];

  // Iterate over every nums2[i] as minimum from nums2.
  for (let i = k; i < n; ++i) {
    // Remove the smallest integer from the previous top k elements
    // then add nums1[i] to the top k elements.
    topKSum += pairs[i][0] - topKHeap.dequeue().element;

    topKHeap.enqueue(pairs[i][0]);

    // Update answer as the maximum score.
    answer = Math.max(answer, topKSum * pairs[i][1]);
  }

  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */

console.log(maxScore([1,3,3,2], [2,1,3,4], 3))