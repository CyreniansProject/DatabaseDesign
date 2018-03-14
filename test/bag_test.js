
const Order = require('../src/order');
const Product = require('../src/product');
const Picking = require('../src/picking');
const BagContent = require('../src/bagContent');
const mongoose= require('mongoose');

describe('Deleting Tests for all datasets', ()=>{

    let order1,apple,sBag;
 
    beforeEach((done) =>{
       
        order1 = new Order({notes: 'test',numberOfBags:5,typeOfBag:'small',date:'01/01/2018'});
        apple = new Product({itemName:'apple',amountSmall:5});

        sBag = new BagContent({priceSmall:5, startDate:'01/01/2018', endDate:'01/08/2018'});
        sBag.product.push(apple);

        Promise.all([order1.save(),apple.save(),sBag.save()])
        .then(()=>done());  
        
    });

    it.only('how much products have been picked ', (done) =>{
            var sum = 0;
            Order.findOne({notes:'test'})
            .then((order)=>{
                console.log("Order Found!");
                orderDate = new Date(order.date);
                BagContent.findOne({priceSmall:5})
                .then((bag)=>{
                   
                    startDate = new Date(bag.startDate);
                    endDate = new Date (bag.endDate);
                    
                    assert(orderDate>=startDate);
                    assert(orderDate<= endDate);
                    bag.populate({
                        path:'product'
                    }).then(()=>{
                        bag.product.forEach(element => {
                            sum += element.amountSmall * order.numberOfBags; 

                    })
                    })
                   
                    //WORK ONLY IF WITH THE USE OF MM/DD/YYYY format
                    
                })
            })
            done();
       
        });
});
