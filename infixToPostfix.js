/*

Implement infix to postfix function

*/

function infixToPostfix(str) {
  let order = {'+': 0, '-': 0, '*': 1, '/': 1, '^': 2};
  let stackOp = []; //use stack to determine order of operations
  let postfix = '';
  for (let i = 0; i < str.length; i++){
    if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
      postfix += str[i];
    } else if (stackOp.length === 0 || str[i] === '(') {
      stackOp.push(str[i]);
    } else if (stackOp.length) {
      if (str[i] === ')') {
        while (stackOp.length !== 0 && stackOp[stackOp.length - 1] !== '(') {
          postfix += stackOp.pop();
        }
        stackOp.pop(); //pop '('
      } else if (order[str[i]] > order[stackOp[stackOp.length - 1]]) {
        stackOp.push(str[i]);
      } else {
        while (stackOp.length !== 0 && order[str[i]] <= order[stackOp[stackOp.length - 1]]) {
          postfix += stackOp.pop();
        }
        stackOp.push(str[i]);
      }
    }
  }
  while (stackOp.length !== 0) {
    postfix += stackOp.pop();
  }
  return postfix;
}

/*
Test Cases:
*/

console.log(infixToPostfix('2+3*4') === '234*+');
console.log(infixToPostfix('2*3-4^2') === '23*42^-');
console.log(infixToPostfix('3+4*5/6') === '345*6/+');
console.log(infixToPostfix('4+8*6-5/3-2*2+2') === '486*+53/-22*-2+');
console.log(infixToPostfix('(1+2)*4') === '12+4*');
console.log(infixToPostfix('4*(5+6)-8/2') === '456+*82/-');
