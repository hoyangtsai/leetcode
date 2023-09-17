/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

/**
 * tags: #directed-graph, #歐拉, #hierholzer
 * {@see hierholzer-algorithm/README.md}
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let routes = new Map();

  // Step 1). build the graph first
  for (const [origin, dest] of tickets) {
    if (!routes.has(origin)) {
      routes.set(origin, []);
    }
    routes.get(origin).push(dest);
  }

  // Step 2). order the destinations
  routes.forEach((dests) => dests.sort());

  let res = [];

  function dfs(origin) {
    // Visit all the outgoing edges first.
    if (routes.has(origin)) {
      let destList = routes.get(origin);
      while (destList.length > 0) {
        // while we visit the edge, we trim it off from graph.
        let dest = destList.shift();
        dfs(dest);
      }
    }
    res.unshift(origin);
  }

  // Step 3). post-order DFS
  dfs('JFK');
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(|E| log |E/V|) where |E| is the number of edges(flights) in the input.
 * - Space complexity: O(|V| + |E|) where |V| is the number of airports and |E| is the number of flights.
 */