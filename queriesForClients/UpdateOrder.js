const Order = require('../src/order');

module.exports = (_id, orderDetails) =>{
     Order.update({_id}, orderDetails,callback);
};