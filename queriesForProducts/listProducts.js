const Product = require('../src/product');

module.exports = () => {
    Product.find({},callback);
};