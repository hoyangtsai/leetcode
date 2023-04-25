/*
 * @lc app=leetcode id=2336 lang=javascript
 *
 * [2336] Smallest Number in Infinite Set
 */

/**
 * tags: #heap, #design
 */

// @lc code=start

var SmallestInfiniteSet = function() {
  this.currentNum = 1;
  this.addedNums = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  let smallNum;
  if (this.addedNums.length > 0) {
    smallNum = this.addedNums.shift();
  } else {
    smallNum = this.currentNum;
    this.currentNum++;
  }
  return smallNum;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (num >= this.currentNum || this.addedNums.includes(num)) return;
  this.addedNums.push(num);
  this.addedNums.sort((a, b) => a - b);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// @lc code=end


/**
 * - Time complexity: $O((m + n) * log n)$
 * - Space complexity: $O(n)$
 */