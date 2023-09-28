module.exports = function drinkEach(drink, drinkTypes) {
    for(const type of drinkTypes) {
        drink(type)
    }
}