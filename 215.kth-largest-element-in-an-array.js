/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (51.14%)
 * Likes:    3049
 * Dislikes: 215
 * Total Accepted:    538.4K
 * Total Submissions: 1M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // a function of sorting array by the smallest number first
    const sortSmallFirst = (a, b) => a - b;
    let heap = [];
    for (const i in nums) {
        const n = nums[i];
        heap = heap.concat(n).sort(sortSmallFirst);
        // keep the size of heap as length as kth, so the first number always is the kth largest number
        if (heap.length > k) {
            heap.shift();
        }
    }
    return heap.shift();
};
// @lc code=end

// Time complexity: O(NlogK)
// Space complexity: O(K)