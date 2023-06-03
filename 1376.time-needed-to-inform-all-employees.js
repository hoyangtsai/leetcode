/*
 * @lc app=leetcode id=1376 lang=javascript
 *
 * [1376] Time Needed to Inform All Employees
 */

/**
 * tags: #tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  let maxTime = Number.MIN_VALUE;

  function dfs(adjList, informTime, curr, time) {
    // Maximum time for an employee to get the news.
    maxTime = Math.max(maxTime, time);
    for (const adjacent of adjList[curr]) {
      // Visit the subordinate employee who gets the news after informTime[curr] unit time.
      dfs(adjList, informTime, adjacent, time + informTime[curr]);
    }
  }

  let adjList = Array.from(Array(n).fill(0), () => []);

  // Making an adjacent list, each index stores the Ids of subordinate employees.
  for (let i = 0; i < n; i++) {
    if (manager[i] != -1) {
      adjList[manager[i]].push(i);
    }
  }

  dfs(adjList, informTime, headID, 0);

  return maxTime;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */