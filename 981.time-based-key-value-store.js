/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function() {
  this.map = new Map();
  this.searchTimestamp = (arr, timestamp) => {
    let l = 0, r = arr.length - 1;
    while (l + 1 <= r) {
      const mid = parseInt((l + r) / 2);
      if (arr[mid].timestamp === timestamp) return mid;
      else if (arr[mid].timestamp < timestamp) l = mid + 1;
      else if (arr[mid].timestamp > timestamp) r = mid - 1;
    }
    return -l -1;
  };
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  const arr = this.map.get(key) || []
  arr.push({value, timestamp});
  this.map.set(key, arr);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  const arr = this.map.get(key)
  if (!arr) return '';

  const index = this.searchTimestamp(arr, timestamp);

  if (index === -1) return '';

  if (index >= 0) return arr[index].value;

  // Use previous value from the collection
  return arr[-index -2].value;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

