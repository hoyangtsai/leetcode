/*
 * @lc app=leetcode id=1282 lang=javascript
 *
 * [1282] Group the People Given the Group Size They Belong To
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  let ans = [];

  // A map from group size to the list of indices that are there in the group.
  let szToGroup = new Map();

  for (let i = 0; i < groupSizes.length; i++) {
    if (!szToGroup.has(groupSizes[i])) {
      szToGroup.set(groupSizes[i], []);
    }

    let group = szToGroup.get(groupSizes[i]);
    group.push(i);

    // When the list size equals the group size, empty it and store it in the answer.
    if (group.length == groupSizes[i]) {
      ans.push(group);
      szToGroup.delete(groupSizes[i]);
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */