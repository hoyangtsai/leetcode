/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @facebook. @bloomberg, @google
// #dynamic-programming, #01-knapsack

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let N = nums.length;

  //「等和子集」的和必然是總和的一半
  let sum = nums.reduce((acc, curr) => acc + curr, 0);

  // 如果是和為奇數顯然無法分成兩個等和子集
  if (sum % 2 === 1) return false;

  let target = parseInt(sum / 2);

  // let dp = Array.from(new Array(N), () => new Array(target + 1));
  // // 先處理考慮第 1 件物品的情況
  // for (let j = 0; j <= target; j++) {
  //   dp[0][j] = j >= nums[0] ? nums[0] : 0;
  // }

  // 取消「物品維度」
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  // // 再處理考慮其餘物品的情況
  // for (let i = 1; i < N; i++) {
  //   for (let j = target; j >= 0; j--) {
  //     let num = nums[i];
  //     // if (j >= num) {
  //     // }
  //     // 不選第 i 件物品
  //     let no = dp[i - 1][j];
  //     // 選第 i 件物品
  //     let yes = j >= num ? dp[i - 1][j - num] + num : 0;
  //     dp[i][j] = Math.max(no, yes);
  //   }
  // }

  for (const num of nums) {
    for (let j = target; j >= num; j--)
      dp[j] = dp[j] || dp[j - num];    
  }

  // // 如果最大價值等於 target，說明可以拆分成兩個「等和子集」
  // return dp[N - 1][target] == target;

  return dp[target];
};
// @lc code=end

/**
 * Dynamic programming by 1 dimension optimize
 * 
 * - Time complexity: O(N * target).
 * - Space complexity: O(target).
 */
