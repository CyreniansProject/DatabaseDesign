const Picking = require('../src/product');

module.exports = (_id, updatedDetails) =>{
    Picking.update({_id}, updatedDetails,callback);
}