/*
 * @lc app=leetcode id=983 lang=javascript
 *
 * [983] Minimum Cost For Tickets
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  // index of ticket
  const [_1day, _7day, _30day] = [0, 1, 2];
    
  // set of travel days
  const travelDays = new Set(days);
  
  const lastTravelDay = days[days.length - 1];

  // DP table, record for minimum cost of ticket to travel
  dpCost = new Array(lastTravelDay + 1).fill(0);

  // solve min cost by DP
  for (let day = 1; day <= lastTravelDay; day++) {
    if (!travelDays.has(day)) {
      // today is not traveling day
      // no extra cost
      dpCost[day] = dpCost[day - 1];
    } else {  
      // today is traveling day
      // compute optimal min cost
      dpCost[day] = Math.min(dpCost[day - 1] + costs[_1day],
                            dpCost[Math.max(day - 7, 0)] + costs[_7day], 
                            dpCost[Math.max(day - 30, 0)] + costs[_30day]);
    }
  }

  return dpCost[lastTravelDay];
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */