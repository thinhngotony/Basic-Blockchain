const Block = require('./block');

// const block = new Block('x','y','z','w');

// console.log(block.toString());

// console.log(Block.toString());

const testBlock = Block.mineBlock(Block.genesis(),"test data");
console.log(testBlock.toString());
