/*

Write a function to check that a binary tree is a valid binary search tree.

A binary search tree is a binary tree in which, for each node:

The node's value is greater than all values in the left subtree.
The node's value is less than all values in the right subtree.

BSTs are useful for quick lookups. If the tree is balanced, we can search for a given value in the tree in O(logn) time.

*/

function isValidBST(head, lowerBound, upperBound) {
  lowerBound = lowerBound === undefined ? -Infinity : lowerBound;
  upperBound = upperBound === undefined ? Infinity : upperBound;
  if (!head) return true;
  if (head.val <= lowerBound || head.val >= upperBound) return false;
  return isValidBST(head.left, lowerBound, head.val) && isValidBST(head.right, head.val, upperBound);
}
