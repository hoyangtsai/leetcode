/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

/**
 * tags: #backtracking, #permutation
 * {@link 78.subsets.js}
 * {@link 46.permutations.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let ans = [];

  function backtrack(arr, firstNum) {
    if (arr.length == k) {
      ans.push(arr.slice());
      return;
    }
  
    let need = k - arr.length;
    let remain = n - firstNum + 1;
    let available = remain - need;
    for (let num = firstNum; num <= firstNum + available; num++) {
      arr.push(num);
      
      backtrack(arr, num + 1);

      arr.pop();
    }
  }

  backtrack([], 1);

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n! / (k - 1)! * (n - k)!)
 * - Space complexity: O(k)
 */