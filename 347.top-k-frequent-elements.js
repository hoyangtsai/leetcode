/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (57.77%)
 * Likes:    2447
 * Dislikes: 167
 * Total Accepted:    323.3K
 * Total Submissions: 547.1K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Note: 
 * 
 * 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 * 
 * 
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
        if (!numMap[n]) {
            numMap[n] = 1
        } else {
            numMap[n] = numMap[n] + 1;
        }
    }

    // sort occurrences ascendently by values and return a array of the keys
    let sortedKeyHeap = Object.keys(numMap).sort((a, b) => numMap[a] - numMap[b]);

    let result = [];
    while (result.length < k && sortedKeyHeap.length != 0) {
        result.push(sortedKeyHeap.pop());
    }

    return result;
};
// @lc code=end

console.log(topKFrequent([1,1,1,2,2,3], 2))