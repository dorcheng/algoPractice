/*

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

*/

// Definition for singly-linked list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const detectCycle = function(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;
  let node = null;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          node = slow;
          break;
      }
  }
  if (node) {
      fast = head;
      while (fast !== node) {
          fast = fast.next;
          node = node.next;
      }
      return node;
  }
  return null;
};

/*
Test Cases:
*/

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
let f = new ListNode(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

let g = new ListNode(10);
let h = new ListNode(12);

g.next = h;

let i = new ListNode(100);

console.log(detectCycle(a).val === 3);
console.log(detectCycle(g) === null);
console.log(detectCycle(i) === null);
