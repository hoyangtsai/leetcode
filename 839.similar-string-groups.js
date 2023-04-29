/*
 * @lc app=leetcode id=839 lang=javascript
 *
 * [839] Similar String Groups
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  
  function isSimilar(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) != b.charAt(i)) {
        diff++;
      }
    }
    return diff == 0 || diff == 2;
  }

  function dfs(node, adj, visit) {
    visit[node] = true;
    if (!adj.has(node)) return;

    for (const neighbor of adj.get(node)) {
      if (!visit[neighbor]) {
        visit[neighbor] = true;
        dfs(neighbor, adj, visit);
      }
    }
  }

  const n = strs.length;
  let adj = new Map();
  // Form the required graph from the given strings array.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSimilar(strs[i], strs[j])) {
        adj.has(i) ? adj.get(i).push(j) : adj.set(i, [j]);
        adj.has(j) ? adj.get(j).push(i) : adj.set(j, [i]);
      }
    }
  }

  let visit = Array(n).fill(false);
  let count = 0;
  // Count the number of connected components.
  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      dfs(i, adj, visit);
      count++;
    }
  }

  return count;
};
// @lc code=end


console.log(numSimilarGroups(["blw","bwl","wlb"])) // 1


/**
 * - Time complexity: O(n^2 * m).
 * - Space complexity: O(n^2).
 */