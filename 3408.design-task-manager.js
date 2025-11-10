/*
 * @lc app=leetcode id=3408 lang=javascript
 *
 * [3408] Design Task Manager
 */

/**
 * tags: #hash-table #priority-queue
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
  this.taskMap = new Map(); // taskId -> { userId, priority }
  this.pq = new PriorityQueue(
    (a, b) => a.priority == b.priority ?
      b.taskId - a.taskId : b.priority - a.priority
  );

  for (const [userId, taskId, priority] of tasks) {
    this.taskMap.set(taskId, { userId, priority });
    this.pq.enqueue({ taskId, priority });
  }    
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
  this.taskMap.set(taskId, { userId, priority });
  this.pq.enqueue({ taskId, priority });
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
  if (!this.taskMap.has(taskId)) return;

  const toUpdate = this.taskMap.get(taskId);
  toUpdate.priority = newPriority;
  this.taskMap.set(taskId, toUpdate);
  this.pq.enqueue({ taskId, priority: newPriority });
};

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
  this.taskMap.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
  while (!this.pq.isEmpty()) {
    const { taskId, priority } = this.pq.dequeue();
    if (this.taskMap.has(taskId) &&
      this.taskMap.get(taskId).priority === priority) {
      const userId = this.taskMap.get(taskId).userId;
      this.taskMap.delete(taskId);
      return userId;
    }
  }
  return -1;
};

/** 
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
// @lc code=end


/**
 * - Time complexity:
 *   - Constructor: O(n log n): where n is the number of initial tasks. This is due to iterating through n tasks and performing O(log n) insertions into the priority queue (PQ) for each.
 *   - add: O(log n)
 *   - edit: O(log n)
 *   - rmv: O(1)
 *   - execTop: O(log n) on average
 * - Space complexity: O(n)
 */