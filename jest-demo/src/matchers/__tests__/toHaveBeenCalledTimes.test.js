const drinkEach = require('../toHaveBeenCalledTimes');



test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkEach(drink, ['lemon', 'octopus']);
    expect(drink).toHaveBeenCalledTimes(2);
    expect(drink).toBeCalledTimes(2)
});