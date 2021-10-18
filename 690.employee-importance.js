/*
 * @lc app=leetcode id=690 lang=javascript
 *
 * [690] Employee Importance
 */

// @google
// #depth-first-search
// #top-google-questions

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  let emap = {};
  for (const e of employees) {
    emap[e.id] = e;
  }

  function dfs(eid) {
    let employee = emap[eid];
    let ans = employee.importance;
    for (const subeid of employee.subordinates) {
      ans += dfs(subeid);
    }
    return ans;
  }

  return dfs(id);
};
// @lc code=end

/**
 * Depth-First Search
 * 
 * - Time complexity: O(N), where N is the number of employees.
 * - Space complexity: O(N).
 */
