const Product = require ('../src/product');
const Picking = require ('../src/picking');

module.exports = (idOfProduct,pickingDetails) => {
    Product.findById({idOfProduct})
    .then((product) =>{
        const picking = new Picking(pickingDetails);
        picking.product = product;
        picking.save(callback);
    });
};