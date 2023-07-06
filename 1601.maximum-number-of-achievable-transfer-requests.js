/*
 * @lc app=leetcode id=1601 lang=javascript
 *
 * [1601] Maximum Number of Achievable Transfer Requests
 */

/**
 * tags: #backtracking
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const transfers = Array(n).fill(0)

  const backtrack = (curr, count, transfers) => {
    if (curr === requests.length) {
      if (transfers.every(t => t === 0)) return count
      else return 0
    }

    transfers[requests[curr][0]] -= 1
    transfers[requests[curr][1]] += 1

    const countIncluded = backtrack(curr + 1, count + 1, transfers)

    transfers[requests[curr][0]] += 1
    transfers[requests[curr][1]] -= 1

    const countExcluded = backtrack(curr + 1, count, transfers)

    return Math.max(countIncluded, countExcluded)
  }
  return backtrack(0, 0, transfers)
};
// @lc code=end


/**
 * - Time Complexity: O(2 * n)
 * - Space Complexity: O(n + m)
 */