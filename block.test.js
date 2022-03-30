const Block = require('./block')

describe ('Block', () => {
    let data, block, lastBlock;

    beforeEach(() => {
        data = 'Tony';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('sets the data to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('sets the last hash to match the hash of last block', () =>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
});
