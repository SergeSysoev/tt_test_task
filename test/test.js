const assert = require('assert');
const arrayToString = require('../index');

describe('arrayToString', function () {
    it('should return 1-8 for [1,2,3,4,5,6,7,8]', async () => {
        assert.strictEqual(await arrayToString([1,2,3,4,5,6,7,8]), '1-8');
    });

    it('should return 1,3-8 for [1,3,4,5,6,7,8]', async () => {
        assert.strictEqual(await arrayToString([1,3,4,5,6,7,8]), '1,3-8');
    });

    it('should return 1,3-8,10-12 for [1,3,4,5,6,7,8,10,11,12]', async () => {
        assert.strictEqual(await arrayToString([1,3,4,5,6,7,8,10,11,12]), '1,3-8,10-12');
    });

    it('should return 1-3 for [1,2,3]', async () => {
        assert.strictEqual(await arrayToString([1,2,3]), '1-3');
    });

    it('should return 1,2 for [1,2]', async () => {
        assert.strictEqual(await arrayToString([1,2]), '1,2');
    });

    it('should return 1,2,4 for [1,2,4]', async () => {
        assert.strictEqual(await arrayToString([1,2,4]), '1,2,4');
    });

    it('should return 1,2,4-6 for [1,2,4,5,6]', async () => {
        assert.strictEqual(await arrayToString([1,2,4,5,6]), '1,2,4-6');
    });

    it('should return 1-3,7-9,15,17,19-21 for [1,2,3,7,8,9,15,17,19,20,21]', async () => {
        assert.strictEqual(await arrayToString([1,2,3,7,8,9,15,17,19,20,21]), '1-3,7-9,15,17,19-21');
    });

    it('should return 1-6,100,1091,1999-2002 for [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]', async () => {
        assert.strictEqual(await arrayToString([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]), '1-6,100,1091,1999-2002');
    });

    it('should return 1 for [1]', async () => {
        assert.strictEqual(await arrayToString([1]), '1');
    });

    it('should return 1,3,5,7,9,11 for [1,3,5,7,9,11]', async () => {
        assert.strictEqual(await arrayToString([1,3,5,7,9,11]), '1,3,5,7,9,11');
    });
});
