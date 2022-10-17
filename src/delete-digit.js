const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxN = 0
  let length = n.toString().length
  for (let i = 0; i < length; i++) {
    let arr = n.toString().split("")
    arr.splice(i,1)
    let el = +arr.join("")
    el>maxN?maxN = el:maxN = maxN

  }
  return maxN
}

module.exports = {
  deleteDigit
};
