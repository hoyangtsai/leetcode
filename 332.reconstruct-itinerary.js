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
  let flightMap = new Map();

  // Step 1). build the graph first
  for (const t of tickets) {
    const origin = t[0];
    const dest = t[1];
    if (flightMap.has(origin)) {
      flightMap.get(origin).push(dest);
    } else {
      let destList = [dest];
      flightMap.set(origin, destList);
    }
  }

  // Step 2). order the destinations
  flightMap.forEach((dests) => dests.sort());

  let result = [];

  function dfs(origin) {
    // Visit all the outgoing edges first.
    if (flightMap.has(origin)) {
      let destList = flightMap.get(origin);
      while (destList.length > 0) {
        // while we visit the edge, we trim it off from graph.
        let dest = destList.shift();
        dfs(dest);
      }
    }
    result.unshift(origin);
  }

  // Step 3). post-order DFS
  dfs('JFK');
  return result;
};
// @lc code=end


/**
 * - Time complexity: O(|E| log |E/V|) where |E| is the number of edges(flights) in the input.
 * - Space complexity: O(|V| + |E|) where |V| is the number of airports and |E| is the number of flights.
 */