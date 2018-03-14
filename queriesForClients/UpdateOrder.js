const Order = require('../src/order');

module.exports = (_id, orderDetails,newAddOns) =>{
    Order.findById(_id).then((order)=>{
        Order.addOns = [];
        if(newAddOns.legth >0 ){
            newAddOns.forEach(element => {
                order.addOns.push(element);
            });
        }
    }).then(()=>{
        Order.update({_id}, orderDetails,callback);
    });
    
};