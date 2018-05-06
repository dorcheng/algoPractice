/*

Write a function to see if the difference between the depths of any two leaf nodes in a binary tree is no greater than one.

*/
function calculateHeight(head) {
  if (!head) return 0;
  let left = calculateHeight(head.left);
  let right = calculateHeight(head.right);

  return 1 + Math.max(left, right);
}

function superBalanced(head) {
  if (!head) return true;
  let left = calculateHeight(head.left);
  let right = calculateHeight(head.right);
  if (Math.abs(left - right) <= 1 && superBalanced(head.left) && superBalanced(head.right)) return true;
  else return false;
}
