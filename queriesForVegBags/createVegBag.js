const BagContent = require('../src/bagContent');
//productList array holding only name of product(string), avgWeight(number) and amount added(number)
module.exports = (bagDetails, productList) => {
    const newBag = new BagContent(bagDetails);
    productList.forEach(element => {
        newBag.product.push(element);
    });

    newBag.save(callback);

    
};