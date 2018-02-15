const BagContent = require('../src/bagContent');

module.exports = (_id) =>{
    BagContent.removeById(_id,callback);
};