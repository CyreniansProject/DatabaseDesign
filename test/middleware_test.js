const mongoose = require('mongoose');
const assert = require ('assert');
const Client = require('../src/client');
const Order = require('../src/order');

describe('Middleware', () =>{
    let ivan,orderTest;

    beforeEach((done) => {
        ivan = new Client({name:'Ivan Marin'});
        orderTest = new Order({notes:'This is a test'});

        orderTest.client = ivan;

        Promise.all([ivan.save(),orderTest.save()])
        .then(()=>done());  
    });

    it('client clean up dangling orders on remove', (done) =>{
        ivan.remove()
        .then(() => Order.count())
        .then((count)=>{
            assert(count===0);
            done();
        });
    });
});