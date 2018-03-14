const BagContent = require('../src/bagContent');
const Order = require('../src/order');

// !!!IMPORTANT!!! date has to be in MM/DD/YYYY format
module.exports = (orderDate) => {
    
    date = new Date (orderDate);
    BagContent.find({})
    .then((bags)=>{
        bags.forEach(element => {
           startDate = new Date(element.startDate);
           endDate = new Date(element.endDate);
           if(startDate<=date && date<endDate)
           {
               return true;
           }
        });
    })
};