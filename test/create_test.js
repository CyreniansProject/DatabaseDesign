const assert = require('assert');
const Client = require('..//src/client');
const Order = require('..//src/order');
const Product = require('..//src/product');
const Picking = require('..//src/picking');
const BagContent = require('..//src/bagContent');

describe('Creating records', ()=>{

    it('saves a client', (done) =>{
        const ivan = new Client({name: 'Ivan Marin'});

        ivan.save()
        .then(() => {
    
            assert(!ivan.isNew);
            done();
        });
    });

    it('saves a order', (done) =>{
        const order1 = new Order({notes: 'test'});
        order1.save()
        .then(() =>{
            assert(!order1.isNew);
            done();
        });
    });

   it('saves a product',(done) =>{
        const product1 = new Product({itemName:'Plum'});
        product1.save()
        .then(()=> {
            assert(!product1.isNew);
            done();
        });
    });

    it('saves a picking',(done) =>{
        const picking = new Picking({amountHarvested:5});
        picking.save()
        .then(()=>{
            assert(!picking.isNew);
            done();
        });
    });
    it('saves a bag ', (done) =>{
        const bag = new BagContent({type:'small'});
        bag.save()
        .then(() =>{
            assert(!bag.isNew);
            done();
        });
    });

});