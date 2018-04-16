/*

Implement TrieNode and Trie data structures using ES6 classes

Open to suggestions & comments!

*/

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false; // boolean that indicates whether this node is the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertIterative(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let child = current.children[letter];
      if (!child) {
        child = new TrieNode();
        current.children[letter] = child;
      }
      current = child;
    }
    current.endOfWord = true;
  }

  insertRecursive(current, word, index) {
    index = index || 0;
    if (index === word.length) {
      current.endOfWord = true;
    }
    let letter = word[index];
    let child = current.children[letter];
    if (!child) {
      child = new TrieNode();
      current.children[letter] = child;
    }
    return this.insertRecursive(child, word, index + 1);
  }

  searchIterative(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let child = current.children[letter];
      if (!child) {
        return false;
      }
      current = child;
    }
    return current.endOfWord; // endOfWord is true only if word exists
  }

  searchRecursive(current, word, index) {
    index = index || 0;
    if (index === word.length) {
      return current.endOfWord;
    }
    let letter = word[index];
    let child = current.children[letter];
    if (!child) {
      return false;
    }
    return this.searchRecursive(child, word, index + 1);
  }

  delete(current, word, index) {
    index = index || 0;
    if (index === word.length) { // when you get to end of word
      if (!current.endOfWord) { // if endOfWord is false, word does not exist
        return false;
      }
      current.endOfWord = false; // if endOfWord is true, delete word by changing endOfWord to false
      return Object.keys(current.children).length === 0; // check to see if node has children
    }
    let letter = word[index];
    let child = current.children[letter];
    if (!child) { // word doesn't exist
      return false;
    }
    let shouldDeleteCurrentNode = this.delete(child, word, index + 1);

    if (shouldDeleteCurrentNode) { // if node has no children, delete node reference from parent's children
      delete current.children[letter];
      return Object.keys(current.children).length === 0;
    }
    return false;
  }
}
