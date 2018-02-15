const Product = require('../src/product');

module.exports = (_id, updatedDetails) => {
    Product.update({_id}, updatedDetails, callback);
};