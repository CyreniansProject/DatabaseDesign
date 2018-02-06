const mongoose= require('mongoose');
const assert =require('assert');

const Client = require('../src/client');
const Order = require ('../src/order');

describe('associations', ()=>{
    let ivan,order1;
    beforeEach((done) =>{
        ivan = new Client({name:'Ivan Marin'});
        order1 = new Order({notes:'testOrder'});

        order1.client = ivan;

        Promise.all([ivan.save(),order1.save()])
        .then(()=>done());  
    
    });

    it('saves a relation between a user and a blogpost',(done) =>{
        Order.findOne({notes:'testOrder'})
        .populate('client')
        .then((order) =>{
            assert(order.client.name ==='Ivan Marin');
            done();
        });
    });

});