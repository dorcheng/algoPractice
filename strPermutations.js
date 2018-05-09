/*

Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order.

Ex.
strPerm('one') // [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
strPerm('app') // [ 'app','pap','ppa']
strPerm('nn') // [ 'nn' ]

*/

function strPerm(str){
  let results = [];
  let letters = str.split('');
  results.push([letters.shift()]);
  while (letters.length !== 0) {
    let currLetter = letters.shift();
    let permutations = [];
    results.forEach(result => {
      for (let i = 0; i <= result.length; i++) {
        let newPerm = result.slice(); //create copy
        newPerm.splice(i, 0, currLetter);
        permutations.push(newPerm);
      }
    });
    results = permutations;
  }
  results = results.map(resultArr => {
    return resultArr.join('');
  });
  return results.filter((result, idx) => {
    return results.indexOf(result) === idx;
  }).sort();
}

// recursive (not necessarily in alphabetical order)

function getPermutations(str) {
  if (str.length === 1) {
    return new Set(str);
  }
  let firstChar = str[0];
  let restOfStr = str.slice(1);

  let restOfStrPerms = getPermutations(restOfStr);

  let permutations = new Set();

  restOfStrPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      permutations.add(perm.slice(0, i) + firstChar + perm.slice(i));
    }
  });
  return permutations;
}

/*
Test Cases:
*/

console.log(strPerm('one').toString() === [ 'eno', 'eon', 'neo', 'noe', 'oen', 'one' ].toString());
console.log(strPerm('app').toString() === [ 'app', 'pap', 'ppa' ].toString());
console.log(strPerm('nn').toString() === [ 'nn' ].toString());
console.log(strPerm('o').toString() === [ 'o' ].toString());
console.log(strPerm('aaaa').toString() === [ 'aaaa' ].toString());
