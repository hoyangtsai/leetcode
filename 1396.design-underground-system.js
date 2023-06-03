/*
 * @lc app=leetcode id=1396 lang=javascript
 *
 * [1396] Design Underground System
 */

/**
 * tags: #design
 */

// @lc code=start

var UndergroundSystem = function() {
  this.routes = new Map();
  this.checkins = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.checkins.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  let [stn, start] = this.checkins.get(id);

  // Lookup the current travel time data for this route.
  let route = stn + "," + stationName;

  this.checkins.delete(id);

  if (!this.routes.has(route)) {
    this.routes.set(route, new Uint32Array(2))
  }

  let trip = this.routes.get(route);
  trip[0]++, trip[1] += t - start
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let [count, sum] = this.routes.get(startStation + "," + endStation)
  return sum / count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end


/**
 * - Time complexity: O(1).
 * - Space complexity: O(P + S^2), where S is the number of stations on the network, and P is the number of passengers making a journey concurrently during peak time.
 */