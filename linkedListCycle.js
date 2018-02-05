/*

Given a linked list, determine if it has a cycle in it.

*/

// Definition for singly-linked list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}


const hasCycle = function(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer === fastPointer) {
          return true;
      }
  }
  return false;
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

console.log(hasCycle(a) === true);
console.log(hasCycle(g) === false);
console.log(hasCycle(i) === false);
