/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.61%)
 * Total Accepted:    503.5K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let nbs = Array.from(nums).sort((a, b) => a - b);
    let results = [];
    for (i = 0; i < nbs.length - 2;) {
        if (nbs[i] > 0) return results;
        for (j = i + 1, k = nbs.length - 1; j < k;) {
            let sum = nbs[i] + nbs[j] + nbs[k];
            let solution = [nbs[i], nbs[j], nbs[k]];
            if (sum === 0) {
                results.push(solution);
                let valj = nbs[j];
                let valk = nbs[k];
                while (nbs[j] === valj) {
                    j++;
                }
                while (nbs[k] === valk) {
                    k--;
                }
            } else if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            }
        }
        let vali = nbs[i];
        while (nbs[i] === vali) {
            i++;
        }
    }
    return results;
};
