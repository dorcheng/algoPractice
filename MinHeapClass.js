/*

Implement Min Heap data structure using ES6 classes

Open to suggestions & comments!

*/

class minHeap {
  constructor() {
    this.elements = [];
    this.size = 0;
  }
  /******** Start of Helper Methods ********/

  getLeftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parentIdx) {
    return 2 * parentIdx + 2;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  leftChildVal(idx) {
    return this.elements[this.getLeftChildIdx(idx)];
  }

  rightChildVal(idx) {
    return this.elements[this.getRightChildIdx(idx)];
  }

  parentVal(idx) {
    return this.elements[this.getParentIdx(idx)];
  }

  swap(idx1, idx2) {
    [this.elements[idx1], this.elements[idx2]] = [this.elements[idx2], this.elements[idx1]];
  }

  /******** End of Helper Methods ********/

  peek() { // returns min element
    if (this.elements.length === 0) {
      return null;
    } else {
      return this.elements[0];
    }
  }

  extract() { // extract min element; O(logn)
    if (this.elements.length === 0) {
      return null;
    } else {
      let min = this.elements[0];
      this.elements[0] = this.elements[this.size - 1]; // take last element and move it to first element
      this.size--; // shrink size of array
      this.heapifyDown(); // adjust heap and shift elements down as necessary
      return min;
    }
  }

  decrease(index){ // decrease value of element; O(logn)
    this.elements[index]--;
    if (this.parentVal(index) > this.elements[index]) { // if parent value is greater than element, adjust heap and shift elements up as necessary
      this.heapifyUp(index);
    }
  }

  insert(element) { // O(logn)
    this.elements[this.size] = element;
    this.size++; // increase size of array
    this.heapifyUp(); // adjust heap and shift elements up as necessary
  }

  heapifyUp(index) { // O(logn)
    index = index || this.size - 1;
    while (this.getParentIdx(index) >= 0 && this.parentVal(index) > this.elements[index]) { // while element has a parent and the parent value is greater than element
      this.swap(this.getParentIdx(index), index); // swap values
      index = this.getParentIdx(index); // go up to parent
    }
  }

  heapifyDown(index) { // O(logn)
    index = index || 0;
    while (this.getLeftChildIdx(index) < this.size) { // while element has a left child
      let smallerChildIndex = this.leftChildVal(index) < this.rightChildVal(index) ? this.getLeftChildIdx(index) : this.getRightChildIdx(index);
      if (this.elements[index] < this.elements[smallerChildIndex]) { // if element is less than the smaller child, break out of while loop
        break;
      } else { // otherwise, swap element with smaller child
        this.swap(index, smallerChildIndex); //
      }
      index = smallerChildIndex; // move down to smaller child
    }
  }
}

