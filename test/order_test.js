const BagContent = require('../src/bagContent');
const Order = require('../src/order');
const assert = require('assert');
const dateFormat = require('dateformat');

describe('Tests for bag and order', ()=>{

    let order1,sBag;
 
    beforeEach((done) =>{
        order1 = new Order({notes:'test', date:'01/02/2018'});
        sBag = new BagContent({priceSmall:5, startDate:'01/01/2018', endDate:'01/08/2018'});

        Promise.all([order1.save(),sBag.save()])
        .then(()=>done());  
        
    });

    it.only('Check for active bag for order dates ', (done) =>{
        Order.findOne({notes:'test'})
        .then((order)=>{
            console.log("Order Found!");
            BagContent.findOne({priceSmall:5})
            .then((bag)=>{
                console.log(order.date);
                console.log(bag.startDate);
                console.log(bag.endDate);
                orderDate = new Date(order.date);
                startDate = new Date(bag.startDate);
                endDate = new Date (bag.endDate);
                
                console.log(orderDate.getDate());
                console.log(orderDate.getMonth());
                console.log(orderDate.getFullYear());

                console.log(orderDate);

                assert(orderDate>=startDate);
                assert(orderDate<= endDate);
                //WORK ONLY IF WITH THE USE OF DD/MM/YYYY format
                done();
            })
        })
    });

});