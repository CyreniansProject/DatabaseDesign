const BagContent = require('../src/bagContent');

module.exports = (_id,updatedDetails,updatedList) => {
    BagContent.findById(_id)
    .then((bag) =>{
    bag.update(updatedDetails);
    bag.product = [];
    updatedList.array.forEach(element => {
        bag.product.pushback(element);
        });
    bag.save(callback);
    });
}