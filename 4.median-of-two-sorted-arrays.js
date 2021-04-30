/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// #array, #binary-search, #divide-and-conquer
// @adobe, @apple, @dropbox, @google, @microsoft, @yahoo, @zenefits
// &278

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
    const partitionX = (low + high) >> 1;
    const partitionY = ((x + y + 1) >> 1) - partitionX;

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
