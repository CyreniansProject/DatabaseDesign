const Product = require('../src/product');

module.exports = (_id) => {
    Product.remove({_id},callback);
}