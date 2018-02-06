const Order = require('../src/order');

module.exports = (_id)=>{
    Order.findById(_id)
    .then((order)=>{

       order.remove(callback);
       
    });
    
};