const Product = require('../src/product');

module.exports = (productDetails) => {
    const newProduct = new Product(productDetails);
    newProduct.save(callback);
}