const assert = require('assert');
const Client = require('../src/client');
const Order = require('..//src/order');
const Product = require('..//src/product');
const Picking = require('..//src/picking');
const BagContent = require('..//src/bagContent');
const mongoose= require('mongoose');

describe('Updating records', ()=>{
  
    let ivan,order1;
 
    beforeEach((done) =>{
        ivan = new Client({name:'Ivan Marin'});
        order1 = new Order({notes: 'testOps'});
        
        Promise.all([ivan.save(),order1.save()])
        .then(()=>done());  
    });
   

        function assertNameClient(operation, done) {
        operation
            .then(() => {
            Client.find({}).then((clients) => {
                assert(clients.length === 1);
                assert(clients[0].name === 'Alex');
                done();
                }).catch((e) => done(e));
                
            });

        };

        function assertNameOrder(operation, done) {
            operation
            .then(() => {
              Order.find({}).then((orders) => {
                assert(orders.length === 1);
                assert(orders[0].notes === 'test');
                done();
                }).catch((e) => done(e));
            });

         };   


    it('instance type using set n save for client', (done) => {
        ivan.set('name', 'Alex');
        assertNameClient(ivan.save(), done);
        
    });
    
    
    it('Model instance can update for client',(done) =>{
        assertNameClient(ivan.update({name: 'Alex'}), done);
         
    });
    
    it('Model class can update for client' ,(done) =>{
        assertNameClient(
      Client.update({name:'Ivan Marin'}, {name: 'Alex'}), done);
    
    
    });
    
    it('A model class that can update one record for client' ,(done) =>{
        assertNameClient(
            Client.update({name:'Ivan Marin'}, {name: 'Alex'}), done
        );
    
    });
    
    it('A model class can find a record with an Id and update for client' ,(done) =>{
        assertNameClient(Client.findByIdAndUpdate(ivan._id, {name: 'Alex'}), done );
    
    });
    
    //----------------------ORDERS-----------------------------------------------

    it('instance type using set n save for order', (done) => {
        order1.set('notes', 'test');
        assertNameOrder(order1.save(), done);
        
    });
    
    
    it('Model instance can update for order',(done) =>{
        assertNameOrder(order1.update({notes: 'test'}), done);
         
    });
    
    it('Model class can update for order' ,(done) =>{
        assertNameOrder(
        Order.update({notes:'testOps'}, {notes: 'test'}), done);
    
    
    });
    
    it('A model class that can update one record for order' ,(done) =>{
        assertNameOrder(
            Order.update({notes:'testOps'}, {notes: 'test'}), done
        );
    
    });
    
    it('A model class can find a record with an Id and update for order' ,(done) =>{
        assertNameOrder(Order.findByIdAndUpdate(order1._id, {notes: 'test'}), done );
    
    });

});