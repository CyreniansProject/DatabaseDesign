const Client = require('../src/client');
const Order = require ('../src/order');

module.exports = (_id,orderDetails) => {
    const order = new Order(orderDetails);
    Client.findById(_id)
    .then((clientToAdd)=> {
        order.client = clientToAdd;
    })
    .then(() =>{
        return order.save();
    });
    
};