/*
 * @lc app=leetcode id=1203 lang=javascript
 *
 * [1203] Sort Items by Groups Respecting Dependencies
 */

/**
 * tags: #topological-sort
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
  // If an item belongs to zero group, assign it a unique group id.
  let groupId = m;
  for (let i = 0; i < n; i++) {
    if (group[i] == -1) {
      group[i] = groupId;
      groupId++;
    }
  }

  // Sort all item regardless of group dependencies.
  let itemGraph = new Map();
  let itemIndegree = Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    itemGraph.set(i, []);
  }

   // Sort all groups regardless of item dependencies.
  let groupGraph = new Map();
  let groupIndegree = Array(groupId).fill(0);
  for (let i = 0; i < groupId; ++i) {
    groupGraph.set(i, []);
  }

  for (let curr = 0; curr < n; curr++) {
    for (const prev of beforeItems[curr]) {
      // Each (prev -> curr) represents an edge in the item graph.
      itemGraph.get(prev).push(curr);
      itemIndegree[curr]++;
      
      // If they belong to different groups, add an edge in the group graph.
      if (group[curr] != group[prev]) {
        groupGraph.get(group[prev]).push(group[curr]);
        groupIndegree[group[curr]]++;
      }
    }
  }

  function topologicalSort(graph, indegree) {
    let visited = [];
    let stack = [];
    for (const key of graph.keys()) {
      if (indegree[key] == 0) {
        stack.push(key);
      }
    }

    while (stack.length > 0) {
      let curr = stack.pop();
      visited.push(curr);
      
      for (const prev of graph.get(curr)) {
        indegree[prev]--;
        if (indegree[prev] == 0) {
          stack.push(prev);
        }
      }
    }

    return visited.length == graph.size ? visited : [];
  }

  // Topological sort nodes in the graph, return an empty array if a cycle exists.
  let itemOrder = topologicalSort(itemGraph, itemIndegree);
  let groupOrder = topologicalSort(groupGraph, groupIndegree);

  if (itemOrder.length === 0 || groupOrder.length === 0) {
    return [];
  }

  // Items are sorted regardless of groups, we need to differentiate them by the groups they belong to.
  let orderedGroups = new Map();
  for (const item of itemOrder) {
    if (orderedGroups.get(group[item]) == null) {
      orderedGroups.set(group[item], [item]);
    } else {
      orderedGroups.get(group[item]).push(item);
    }
  }

  // Concatenate sorted items in all sorted groups.
  // [group 1, group 2, ... ] -> [(item 1, item 2, ...), (item 1, item 2, ...), ...]
  let answerList = [];
  for (const groupIndex of groupOrder) {
    if (orderedGroups.get(groupIndex)) {
      answerList = [...answerList, ...orderedGroups.get(groupIndex)];
    }
  }

  return answerList;
};
// @lc code=end


/**
 * - Time complexity: O(n^2)
 * - Space complexity: O(n)
 */