const Client = require('../src/client');
const Order = require ('../src/order');

module.exports = (_id,orderDetails,addOns) => {
    const order = new Order(orderDetails);
    Client.findById(_id)
    .then((clientToAdd)=> {
        order.client = clientToAdd;
    }).then(() =>{   
        if(addOns.legth >0 ){
            addOns.forEach(element => {
                order.addOns.push(element);
            
            });
        }
       
       
    })
    .then(() =>{
        return order.save();
    });
    
};