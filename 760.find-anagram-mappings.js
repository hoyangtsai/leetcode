/*
 * @lc app=leetcode id=760 lang=javascript
 *
 * [760] Find Anagram Mappings
 */

/**
 * tags: #hash-table, #two-array-map
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }

  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map.get(nums1[i]));
  }
  return ans;
};
// @lc code=end



anagramMappings([40, 40], [40, 40]); // [1, 1]