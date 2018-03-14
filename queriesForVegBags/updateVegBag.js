const BagContent = require('../src/bagContent');

module.exports = (_id,updatedDetails,updatedList) => {
    BagContent.findById(_id)
    .then((bag) =>{
    bag.update(updatedDetails);
    bag.product = [];
    updatedList.forEach(element => {
        bag.product.push(element);
        });
    bag.save(callback);
    });
}