const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const season = {
  winter:[11,0,1],
  spring:[2,3,4],
  summer:[5,6,7],
  autumn:[8,9,10],
}
function getSeason(date) {
  if(typeof date.getMonth() != "number") return true
  for(let el of Object.entries(season)){
    if(el[1].includes(date.getMonth())){
      return el[0]
    }
  }
}

module.exports = {
  getSeason
};
