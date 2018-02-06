const assert = require('assert');
const Client = require('../src/client');
const Order = require('..//src/order');
const Product = require('..//src/product');
const Picking = require('..//src/picking');
const BagContent = require('..//src/bagContent');
const mongoose= require('mongoose');

describe('Deleting Tests for all datasets', ()=>{
    
    let ivan,order1;
 
    beforeEach((done) =>{
        ivan = new Client({name:'Ivan Marin'});
        order1 = new Order({notes: 'test'});
        
        Promise.all([ivan.save(),order1.save()])
        .then(()=>done());  
    });
         

    function assertDeletionClient(operation,done) {
        operation.then(() => {
            Client.findOne({name:'Ivan Marin'})
            .then((client) =>{
                assert(client===null);
                done();
            }).catch((e) => done(e));
        });
    };

    function assertDeletionOrder(operation,done) {
        operation.then(() => {
            Order.findOne({notes:'test'})
            .then((order) =>{
                assert(order===null);
                done();
            }).catch((e) => done(e));
        });
    };

    

    it('Model instance remove for client', (done) =>{
        assertDeletionClient( ivan.remove(),done);
    });

    it('Class method remove for client', (done) =>{
        //Remove a bunch of methods by a criteria
       
        assertDeletionClient(  Client.remove({name:'Ivan Marin'}),done);
    });     

    it('class method findAndRemove for client', (done) =>{
        
        assertDeletionClient( Client.findOneAndRemove({name: 'Ivan Marin'}),done);
    });

    it('class method findByIdAndRemove for client', (done) =>{
        
        assertDeletionClient( Client.findByIdAndRemove(ivan._id),done);
    });
//-----------------------------------------------------------------------------
    it('Model instance remove for order', (done) =>{
        assertDeletionOrder( order1.remove(),done);
    });

    it('Class method remove for order', (done) =>{
        //Remove a bunch of methods by a criteria
       
        assertDeletionOrder(  Order.remove({notes:'test'}),done);
    });     

    it('class method findAndRemove for order', (done) =>{
        
        assertDeletionOrder( Order.findOneAndRemove({notes: 'test'}),done);
    });

    it('class method findByIdAndRemove for order', (done) =>{
        
        assertDeletionOrder( Order.findByIdAndRemove(order1._id),done);
    });

});