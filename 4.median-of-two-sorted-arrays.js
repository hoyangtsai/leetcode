/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

/**
 * tags: #binary-search, #divide-and-conquer
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // nums1 must be shorter
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  let x = nums1.length;
  let y = nums2.length;

  let low = 0, high = x;
  while (low <= high) {
    const partitionX = parseInt((low + high) / 2);
    const partitionY = parseInt((x + y + 1) / 2) - partitionX;

    const leftMaxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const leftMaxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const rightMinX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const rightMinY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (leftMaxX <= rightMinY && leftMaxY <= rightMinX) {
      const lowMax = Math.max(leftMaxX, leftMaxY);
      // total length is odd
      if ((x + y) % 2 == 1) {
        return lowMax;
      }
      // total length is even
      return (lowMax + Math.min(rightMinX, rightMinY)) / 2;
    } else if (leftMaxX < rightMinY) {
      low = partitionX + 1;
    } else {
      high = partitionX - 1;
    }
  }
};
// @lc code=end


/**
 * - Time complexity: O(log(min(m, n))
 * - Space complexity: O(1)
 */

const med = findMedianSortedArrays([3, 6, 7, 8, 11], [2, 5, 9, 13, 14, 15, 18]);
console.log('med =>', med);
