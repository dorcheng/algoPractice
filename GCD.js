/*

Find the greatest common denominator of two positive integers
BONUS: Find the least common multiple of two positive integers

*/

// APPROACH: take advantage of Euclidean Algorithm
// CONCEPT: the greatest common divisor of 2 or more integers (when at least one of them is not 0) is the largest positive integer that divides the numbers without a remainder

function gcd(num1, num2) {
  let greaterNum = num1 > num2 ? num1 : num2;
  let smallerNum = num1 < num2 ? num1 : num2;
  if (!smallerNum) {
    return greaterNum;
  } else {
    return gcd(smallerNum, greaterNum % smallerNum);
  }
}

function lcm(num1, num2) { //find the union and remove intersection of sets of prime factors
  return (num1 * num2) / gcd(num1, num2);
}

/*
Test Cases:
*/

console.log(gcd(1921, 493) === 17);
console.log(gcd(12, 13) === 1);
console.log(gcd(3, 9) === 3);
console.log(gcd(0, 5) === 5);

console.log(lcm(3, 15) === 15);
console.log(lcm(15, 10) === 30);
console.log(lcm(0, 10) === 0);

