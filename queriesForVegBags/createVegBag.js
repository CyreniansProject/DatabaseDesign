const BagContent = require('../src/bagContent');
//productList array holding only name of product(string), avgWeight(number) and amount added(number)
module.exports = (bagDetails, productList) => {
    const newBag = new BagContent(bagDetails);
    productList.array.forEach(element => {
        newBag.product.pushback(element);
    });

    newBag.save(callback);

    
};