/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    switch (value) {
      case null: {
        this.chain.push("null");
        break;
      }
      case undefined: {
        this.chain.push("");
        break;
      }
      default: {
        this.chain.push(value);
      }
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || (position - 1) < 0 || position > this.chain.length) {
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.toString().replaceAll(",", " )~~( ");
    this.chain = [];
    return `( ${result} )`;
  }
};

module.exports = {
  chainMaker
};
