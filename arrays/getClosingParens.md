Write a function that, given a sentence, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example:

"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

If the string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

```javascript
function getClosingParen(str, parensIndex) {
  let openParens = 0

  for (let i = parensIndex + 1; i < str.length; i++) {
    if (str[i] === '(') {
      openParens++
    } else if (str[i] === ')') {
      if (openParens === 0) {
        return i
      } else {
        openParens--
      }
    }
  }

  return null
}

getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10) //should return 79
```
