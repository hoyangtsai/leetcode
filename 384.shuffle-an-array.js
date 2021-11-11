/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @google, @microsoft
// #math, #fisher-yates-algorithm
// #top-google-questions

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const shuffled = this.nums.slice();

  for (let i = 0; i < shuffled.length; i++) {
    swap(shuffled, i, randRange(i, shuffled.length));
  }

  return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

