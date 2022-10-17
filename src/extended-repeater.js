const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 const options = {
  separator:"+",
  additionSeparator:"|"
};
 function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	let arr = []
	let addArr = []
	let countRepeat = 0
	let addCountRepeat = 0
	while(countRepeat != options.repeatTimes){
		countRepeat++
		arr.push(str)
	}
	while(addCountRepeat != options.additionRepeatTimes){
			addCountRepeat++
			addArr.push(options.addition)
		}
		addArr = addArr.join(options.additionSeparator)
	return arr.map(el=>el+addArr).join(options.separator)
  }

module.exports = {
  repeater
};
