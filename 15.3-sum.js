/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
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
