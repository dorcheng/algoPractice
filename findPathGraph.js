/*

Route between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes

Graph is represented via an adjacency list:

 let example =
[ [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7] ]


Open to comments and suggestions

*/

// Using BFS

function findPathBFS(graph, nodeA, nodeB) {
  let queue = [];
  let visited = new Set();

  queue.push(nodeA);
  visited.add(nodeA);

  while (queue.length !== 0) {
    let currNode = queue.shift(); // shift off first element
    if (currNode === nodeB) return true; // check if current node equals target
    for (let i = 0; i < graph[currNode].length; i++) {
      if (!visited.has(graph[currNode][i])) { // check if child has been visited
        queue.add(graph[currNode][i]); // add child to queue
        visited.add(graph[currNode][i]); // mark child as visited
      }
    }
  }
  return false;
}

// Using DFS

function findPathDFSRecursive(graph, visited, nodeA, nodeB) {
  visited.add(nodeA);
  if (nodeA === nodeB) return true;
  for (let i = 0; i < graph[nodeA].length; i++) {
    if (!visited.has(graph[nodeA][i])) {
      findPathDFSRecursive(graph, visited, graph[nodeA][i], nodeB);
    }
  }
  return false;
}

// Using DFS Stack

function findPathDFSIterative(graph, nodeA, nodeB) {
  let stack = [];
  let visited = new Set();

  stack.push(nodeA);
  visited.add(nodeA);

  while (stack.length !== 0) {
    let currNode = stack.pop();
    if (currNode === nodeB) return true;
    for (let i = 0; i < graph[currNode][i]; i++) {
      if (!visited.has(graph[currNode][i])) {
        stack.push(graph[currNode][i]);
        visited.add(graph[currNode][i]);
      }
    }
  }
  return false;
}
