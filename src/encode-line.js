const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = []
  for (let i = 0; i < str.length; i++) {
    let a = [...new Set(str)][i]
    console.log(a);
    let amount = str.split(a).length-1;
    res.push(amount)
    res.push(a)
  }
  return res.join("")
}

module.exports = {
  encodeLine
};
