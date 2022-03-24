/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

/**
 * tags: #sorting, #segment-tree
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let offset = 1e4;        // offset negative to non-negative
  let size = 2 * 1e4 + 1;  // total possible values in nums

  let tree = new Array(size * 2).fill(0);
  let result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let smallerCount = query(0, nums[i] + offset, tree, size);
    result.push(smallerCount);
    update(nums[i] + offset, 1, tree, size);
  }

  result.reverse();
  return result;

  function update(index, value, tree, size) {
    index += size; // shift the index to the leaf
    // update from leaf to root
    tree[index] += value;
    while (index > 1) {
      index = parseInt(index / 2);
      tree[index] = tree[index * 2] + tree[index * 2 + 1];
    }
  }

  function query(left, right, tree, size) {
    // return sum of [left, right)
    let result = 0;
    left += size;  // shift the index to the leaf
    right += size;
    while (left < right) {
      // if left is a right node
      // bring the value and move to parent's right node
      if (left % 2 == 1) {
        result += tree[left];
        left++;
      }
      // else directly move to parent
      left = parseInt(left / 2);

      // if right is a right node
      // bring the value of the left node and move to parent
      if (right % 2 == 1) {
        right--;
        result += tree[right];
      }
      // else directly move to parent
      right = parseInt(right / 2);
    }
    return result;
  }
};
// @lc code=end



let ans = countSmaller([5,2,6,1]);
console.log('ans :>> ', ans);