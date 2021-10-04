/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// @amazon, @facebook, @microsoft
// #hash-table, #linked-list

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  let oldNode = head;

  const visited = new Map();

  // Creating the new head node.
  let newNode = new Node(oldNode.val);
  visited.set(oldNode, newNode);

  function getClonedNode(node) {
    // If the node exists then
    if (node != null) {
      // Check if the node is in the visited dictionary
      if (visited.has(node)) {
        // If its in the visited dictionary then return the new node reference from the dictionary
        return visited.get(node);
      } else {
        // Otherwise create a new node, add to the dictionary and return it
        visited.set(node, new Node(node.val));
        return visited.get(node);
      }
    }
    return null;
  }

  // Iterate on the linked list until all nodes are cloned.
  while (oldNode != null) {
    // Get the clones of the nodes referenced by random and next pointers.
    newNode.random = getClonedNode(oldNode.random);
    newNode.next = getClonedNode(oldNode.next);

    // Move one step ahead in the linked list.
    oldNode = oldNode.next;
    newNode = newNode.next;
  }

  return visited.get(head);
};
// @lc code=end

/**
 * Iterative with 𝑂(𝑁) Space
 * 
 * - Time complexity: 𝑂(𝑁), where 𝑁 is the number of nodes in the linked list.
 * - Space complexity: 𝑂(𝑁).
 */
