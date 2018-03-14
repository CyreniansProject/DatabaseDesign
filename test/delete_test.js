const assert = require('assert');
const Client = require('../src/client');
const Order = require('../src/order');
const Product = require('../src/product');
const Picking = require('../src/picking');
const BagContent = require('../src/bagContent');
const mongoose= require('mongoose');

describe('Deleting Tests for all datasets', ()=>{

    let ivan,order1,apple,picking1,sBag;
 
    beforeEach((done) =>{
        ivan = new Client({name:'Ivan Marin'});
        order1 = new Order({notes: 'test'});
        apple = new Product({itemName:'apple'});
        picking1 = new Picking({amountHarvested:7})
        sBag = new BagContent({type:'small'});

        Promise.all([ivan.save(),order1.save(),apple.save(),picking1.save(),sBag.save()])
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

    function assertDeletionProduct(operation,done) {
        operation.then(() => {
            Product.findOne({itemName:'apple'})
            .then((product) =>{
                assert(product===null);
                done();
            }).catch((e) => done(e));
        });
    };

    function assertDeletionPicking(operation,done) {
        operation.then(() => {
            Picking.findOne({amountHarvested:5})
            .then((picking) =>{
                assert(picking===null);
                done();
            }).catch((e) => done(e));
        });
    };

    function assertDeletionBag(operation,done) {
        operation.then(() => {
            BagContent.findOne({type:'small'})
            .then((bagcontent) =>{
                assert(bagcontent===null);
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
//-------------------------------------ORDERS----------------------------------------
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

    //-------------------------------------PRODUCT----------------------------------------
    it('Model instance remove for product', (done) =>{
        assertDeletionProduct( apple.remove(),done);
    });

    it('Class method remove for product', (done) =>{
        //Remove a bunch of methods by a criteria
       
        assertDeletionProduct(  Product.remove({itemName:'apple'}),done);
    });     

    it('class method findAndRemove for product', (done) =>{
        
        assertDeletionProduct( Product.findOneAndRemove({itemName: 'apple'}),done);
    });

    it('class method findByIdAndRemove for product', (done) =>{
        
        assertDeletionProduct( Product.findByIdAndRemove(apple._id),done);
    });

     //-------------------------------------PICKING----------------------------------------
     it('Model instance remove for product', (done) =>{
        assertDeletionPicking( picking1.remove(),done);
    });

    it('Class method remove for product', (done) =>{
        //Remove a bunch of methods by a criteria
       
        assertDeletionPicking(  Picking.remove({amountHarvested:5}),done);
    });     

    it('class method findAndRemove for product', (done) =>{
        
        assertDeletionPicking( Picking.findOneAndRemove({amountHarvested:5}),done);
    });

    it('class method findByIdAndRemove for product', (done) =>{
        
        assertDeletionPicking( Picking.findByIdAndRemove(picking1._id),done);
    });

     //-------------------------------------VEGBAGS----------------------------------------
     it('Model instance remove for product', (done) =>{
        assertDeletionBag( sBag.remove(),done);
    });

    it('Class method remove for product', (done) =>{
        //Remove a bunch of methods by a criteria
       
        assertDeletionBag(  BagContent.remove({type:'small'}),done);
    });     

    it('class method findAndRemove for product', (done) =>{
        
        assertDeletionBag( BagContent.findOneAndRemove({type:'small'}),done);
    });

    it('class method findByIdAndRemove for product', (done) =>{
        
        assertDeletionBag( BagContent.findByIdAndRemove(sBag._id),done);
    });

});