/*

1. Write funtion to create a binary tree from array in level order

2. Write function to create a binary search tree from array in level order

*/

class Node {
  constructor(val){
    this.val = val ? val : null;
    this.left = null;
    this.right = null;
  }
}

/******    Create Binary Tree    *******/

function createBinaryTreeIterative(arr) {
  if (arr.length === 0) {
    return null;
  }

  let idx = 0;
  let root = new Node(arr[idx++]);
  let queue = [];
  queue.push(root);

  while (idx < arr.length) {
    let curr = queue.pop();
    let left = new Node(arr[idx++]);
    curr.left = left;
    queue.push(left);
    if (idx < arr.length) {
      let right = new Node(arr[idx++]);
      curr.right = right;
      queue.push(right);
    }
  }

  return root;
}

function createBinaryTreeRecursive(arr, idx) {
  let root = new Node(); // null Node
  if (idx < arr.length) {
    root.val = arr[idx];
    root.left = createBinaryTreeRecursive(arr, 2 * idx + 1);
    root.right = createBinaryTreeRecursive(arr, 2 * idx + 2);
  }
  return root;
}

/******    Create Binary Search Tree    *******/

function createBinarySearchTree(arr, idx) {
  let root = new Node(arr[idx++]);
  for (let i = idx; i < arr.length; i++) {
    insert(root, arr[i]);
  }
  return root;
}

function insert(root, val) {
  let direction = val < root.val ? 'left' : 'right';
  if (!root[direction]) {
    root[direction] = new Node(val);
  } else {
    return insert(root[direction], val);
  }
}
