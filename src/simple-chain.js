const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:"",
  getLength() {
    return this.chain.replace(/[\D]/g, "").length
  },
  addLink(value) {
    this.chain += ("( "+`${value}`+" )~~")
    return this
  },
  removeLink(pos) {
    this.chain = this.chain.split("~~").map(el=>(el != `( ${pos} )`)?el:"").filter(String).join("~~")
    return this
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~")
    return this
  },
  finishChain() {
    return this.chain

  }
};

module.exports = {
  chainMaker
};
