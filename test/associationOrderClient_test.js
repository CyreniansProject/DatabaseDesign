const mongoose= require('mongoose');
const assert =require('assert');

const Client = require('../src/client');
const Order = require ('../src/order');
const Product = require ('../src/product');
const Picking = require ('../src/picking');

describe('associations', ()=>{
    let ivan,order1, orange, harvest;

        beforeEach((done) =>{
        ivan = new Client({name:'Ivan Marin'});
        order1 = new Order({notes:'testOrder'});
        orange = new Product({itemName:'orange'});
        harvest = new Picking({amountHarvested: 5});

        //harvest.product = orange;
        order1.client = ivan;
      

        Promise.all([ivan.save(),order1.save()])
        .then(()=>done());  
    
    });

    it('saves a relation between a client and a order',(done) =>{
        Order.findOne({notes:'testOrder'})
        .populate('client')
        .then((order) =>{
            assert(order.client.name ==='Ivan Marin');
            done();
        });
    });

 

});