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
	const obj = new Set( Object.keys(options) )
	const repeatTimes = obj.has('repeatTimes')?options.repeatTimes : 1
	const separator = obj.has('separator')?options.separator : '+'
	const addition = obj.has('addition')?options.addition : ''
	const addRepeatTimes = obj.has('additionRepeatTimes')?options.additionRepeatTimes : 1
	const additionSeparator = obj.has('additionSeparator')?options.additionSeparator : '|'
	let arr = []
	let addArr = []
	let countRepeat = 0
	let addCountRepeat = 0
	while(countRepeat != repeatTimes){
		countRepeat++
		arr.push(str)
	}
	while(addCountRepeat != addRepeatTimes){
			addCountRepeat++
			addArr.push(addition)
		}
		addArr = addArr.join(additionSeparator)
	return arr.map(el=>el+addArr).join(separator)
  }

module.exports = {
  repeater
};
