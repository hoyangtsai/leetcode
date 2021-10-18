/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
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