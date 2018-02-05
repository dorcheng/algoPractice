/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

*/

// Definition for singly-linked list

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let resultHead = l1.val <= l2.val ? new ListNode(l1.val) : new ListNode(l2.val);
  let currNode1 = l1.val <= l2.val ? l1.next : l1;
  let currNode2 = l1.val <= l2.val ? l2 : l2.next;
  let currResultNode = resultHead;

  while (currNode1 && currNode2) {
      if (currNode1.val <= currNode2.val) {
          currResultNode.next = currNode1;
          currResultNode = currResultNode.next;
          currNode1 = currNode1.next;
      } else {
          currResultNode.next = currNode2;
          currResultNode = currResultNode.next;
          currNode2 = currNode2.next;
      }
  }
  while (currNode1) {
      currResultNode.next = currNode1;
      currResultNode = currResultNode.next;
      currNode1 = currNode1.next;
  }
  while (currNode2) {
      currResultNode.next = currNode2;
      currResultNode = currResultNode.next;
      currNode2 = currNode2.next;
  }
  return resultHead;
};


/*
Test Cases:
*/

// create singly linked list 1 -> 2 -> 4
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(4);

// create singly linked list 1 -> 3 -> 4
let d = new ListNode(1);
let e = new ListNode(3);
let f = new ListNode(4);

a.next = b;
b.next = c;
d.next = e;
e.next = f;

let result = mergeTwoLists(a, d); // should return 1 -> 1 -> 2 -> 3 -> 4 -> 4
let arr = [1, 1, 2, 3, 4, 4]; // correct order in array form
const test = function (head, answer) {
  for (let i = 0; i < answer.length; i++) {
    if (head.val !== answer[i]) {
      return false;
    } else {
      head = head.next;
    }
  }
  return true;
};

test(result, arr);


// Alternative solution using recursion

const mergeTwoListsRecursive = function(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
      l1.next = mergeTwoListsRecursive(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoListsRecursive(l2.next, l1);
      return l2;
  }
};
