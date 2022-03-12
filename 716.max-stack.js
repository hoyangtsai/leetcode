/*
 * @lc app=leetcode id=716 lang=javascript
 *
 * [716] Max Stack
 */

/**
 * tags: #design, #stack
 */

// @lc code=start

var MaxStack = function() {
  this.stack = [];
  this.maxStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  let max = this.maxStack.length === 0 ? x : this.maxStack[this.maxStack.length - 1];
  this.maxStack.push(max > x ? max : x);
  this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  this.maxStack.pop(); 
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  if (this.maxStack.length > 0) {
    return this.maxStack[this.maxStack.length - 1];
  }
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  let max = this.peekMax();

  // cache other items before popMax
  let buffer = [];
  while (this.top() != max) buffer.push(this.pop());

  // remove the last one item
  this.pop();

  while (buffer.length > 0) this.push(buffer.pop());
  return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
// @lc code=end

