const Client = require('../src/client');
const Order = require('../src/order');
const Product = require('../src/product');
const Picking = require('../src/picking');
const BagContent = require('../src/bagContent');
const mongoose= require('mongoose');

describe('Deleting Tests for all datasets', ()=>{

    let order1,apple,picking1,sBag,picking2,picking3;
 
    beforeEach((done) =>{
       
        order1 = new Order({notes: 'test'});
        apple = new Product({itemName:'apple'});
        picking1 = new Picking({amountHarvested:10 ,pickingWeek:'01/02/2018'});
        picking2 = new Picking({amountHarvested:10 ,pickingWeek:'01/03/2018'});
        picking3 = new Picking({amountHarvested:10 ,pickingWeek:'01/04/2018'});

        sBag = new BagContent({type:'small'});

        picking1.product = apple;
        picking2.product = apple;
        picking3.product = apple;

        Promise.all([order1.save(),apple.save(),picking1.save(),picking2.save(),picking3.save()])
        .then(()=>done());  
        
    });

    it.only('how much products have been picked ', (done) =>{
            var sum = 0;
        Product.findOne({itemName:'apple'})
        .then((product)=>{
            Picking.find({product:product})
            .then((pickings)=>{
                pickings.forEach(element => {
                    sum += element.amountHarvested; 
            })
            console.log(sum);
            done();
        })
        });
    });
});