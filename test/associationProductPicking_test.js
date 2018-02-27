const mongoose= require('mongoose');
const assert =require('assert');

const Product = require ('../src/product');
const Picking = require ('../src/picking');

describe('associations', ()=>{
    let  orange, harvest, harvest2;

        beforeEach((done) =>{
        orange = new Product({itemName:'orange'});
        harvest = new Picking({amountHarvested: 5});
        harvest2 = new Picking({amountHarvested: 20});

        harvest2.product = orange;
        harvest.product = orange;

        Promise.all([orange.save(),harvest.save(),harvest2.save()])
        .then(()=>done());  
    
    });

    it('saves a relation between a product and a picking',(done) =>{
        Picking.findOne({amountHarvested:5})
        .populate('product')
        .then((picking) =>{
            assert(picking.product.itemName ==='orange');
            done();
        });
    });

    it('total amount of fruit havested',(done) =>{
      
        Product.findOne({itemName:'orange'}).
        then((orange)=>{
            Picking.find({product:orange}).
            populate({
                path:'product'
            }).then((picking)=>{
                var sum = 0;
                    for (var i = 0, len = picking.length; i < len; i++) 
                    {
                       sum = sum + picking[i].amountHarvested;
                    }
                console.log(orange.itemName+' ' +sum);
                assert(sum === 25);
                done();
               
            })
        })
    })
});