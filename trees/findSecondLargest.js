/*

Write a function to find the 2nd largest element in a binary search tree.

*/

// O(n) time where n is height of tree
// O(n) space where n is height of tree

function findLargest(node) {
  if (node.right) return findLargest(node.right);
  return node;
}

function findSecondLargest(head) {
  if (!head || (!head.left && !head.right)) return null;
  if (!head.right && head.left) return findLargest(head.left);
  if (head.right && !head.right.left && !head.right.right) return head;
  return findSecondLargest(head.right);
}
