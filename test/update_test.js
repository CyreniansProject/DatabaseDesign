const assert = require('assert');
const Client = require('../src/client');
const Order = require('..//src/order');
const Product = require('..//src/product');
const Picking = require('..//src/picking');
const BagContent = require('..//src/bagContent');
const mongoose= require('mongoose');

describe('Updating records', ()=>{
  
    let ivan, order1, apple, picking1, sBag;
 
    beforeEach((done) =>{
        ivan = new Client({name:'Ivan Marin'});
        order1 = new Order({notes: 'test'});
        apple = new Product({itemName:'apple'});
        picking1 = new Picking({amountHarvested:5})
        sBag = new BagContent({typeOfBag:'small'});

        Promise.all([ivan.save(),order1.save(),apple.save(),picking1.save(),sBag.save()])
        .then(()=>{
            done();
        });  
        

       
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

         function assertNameProduct(operation, done) {
            operation
            .then(() => {
              Product.find({}).then((products) => {
                assert(products.length === 1);
                assert(products[0].itemName === 'pear');
                done();
                }).catch((e) => done(e));
            });

         };  

         function assertNamePicking(operation, done) {
            operation
            .then(() => {
              Picking.find({}).then((pickings) => {
                assert(pickings.length === 1);
                assert(pickings[0].amountHarvested === 1);
                done();
                }).catch((e) => done(e));
            });

         }; 

         function assertNameBag(operation, done) {
            operation
            .then(() => {
              BagContent.find({}).then((bags) => {
                assert(bags.length === 1);
                assert(bags[0].typeOfBag === 'large');
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

    //----------------------PRODUCTS-----------------------------------------------

    it('instance type using set n save for product', (done) => {
        apple.set('itemName', 'pear');
        assertNameProduct(apple.save(), done);
        
    });
    
    
    it('Model instance can update for product',(done) =>{
        assertNameProduct(apple.update({itemName: 'pear'}), done);
         
    });
    
    it('Model class can update for product' ,(done) =>{
        assertNameProduct(
        Product.update({itemName:'apple'}, {itemName: 'pear'}), done);
    
    
    });
    
    it('A model class that can update one record for product' ,(done) =>{
        assertNameProduct(
            Product.update({itemName:'apple'}, {itemName: 'pear'}), done
        );
    
    });
    
    it('A model class can find a record with an Id and update for product' ,(done) =>{
        assertNameProduct(Product.findByIdAndUpdate(apple._id, {itemName: 'pear'}), done );
    
    });


    //----------------------PICKING-----------------------------------------------

    it('instance type using set n save for product', (done) => {
        picking1.set('amountHarvested', 1);
        assertNamePicking(picking1.save(), done);
        
    });
    
    
    it('Model instance can update for product',(done) =>{
        assertNamePicking(picking1.update({amountHarvested:1}), done);
         
    });
    
    it('Model class can update for product' ,(done) =>{
        assertNamePicking(
        Picking.update({amountHarvested:5},{amountHarvested:1}), done);
    
    
    });
    
    it('A model class that can update one record for product' ,(done) =>{
        assertNamePicking(
            Picking.updateOne({amountHarvested:5}, {amountHarvested:1}), done
        );
    
    });
    
    it('A model class can find a record with an Id and update for product' ,(done) =>{
        assertNamePicking(Picking.findByIdAndUpdate(picking1._id, {amountHarvested:1}), done );
    
    });


    //----------------------VEGBAGS-----------------------------------------------

    it('instance type using set n save for product', (done) => {
        sBag.set('typeOfBag', 'large');
        assertNameBag(sBag.save(), done);
        
    });
    
    
    it('Model instance can update for product',(done) =>{
        assertNameBag(sBag.update({typeOfBag:'large'}), done);
         
    });
    
    it('Model class can update for product' ,(done) =>{
        assertNameBag(
        BagContent.update({typeOfBag:'small'},{typeOfBag:'large'}), done);
    
    
    });
    
    it('A model class that can update one record for product' ,(done) =>{
        assertNameBag(
            BagContent.updateOne({typeOfBag:'small'}, {typeOfBag:'large'}), done
        );
    
    });
    
    it('A model class can find a record with an Id and update for product' ,(done) =>{
        assertNameBag(BagContent.findByIdAndUpdate(sBag._id, {typeOfBag:'large'}), done );
    
    });

});