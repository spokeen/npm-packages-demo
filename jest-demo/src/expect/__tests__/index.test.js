const {bestLaCroixFlavor} = require('../index')

describe('', () => {

test('the best flavor is not coconut', () => {
    expect(bestLaCroixFlavor()).not.toBe('coconut');
});


it('the best flavor is not coconut', () => {
    expect(bestLaCroixFlavor()).toBe('grapefruit');
});

})