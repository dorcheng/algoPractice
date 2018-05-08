/*

Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

*/

class Queue {
  constructor(){
    this.firstStack = [];
    this.secondStack = [];
  }

  enqueue(num) {
    this.firstStack.push(num);
  }

  dequeue() {
    if (this.secondStack.length > 0) {
      this.secondStack.pop();
    } else {
      while (this.firstStack.length > 0) {
       this.secondStack.push(this.firstStack.pop());
      }
      if (this.secondStack.length > 0) {
        this.secondStack.pop();
      } else {
        return undefined;
      }
    }
  }
}
