const Product = require('../src/product');
const Purchase = require('../src/purchase');

module.exports = () =>{

    return Promise.all([productQuery,sumQuery])
    .then((results)=>{
        return{
            productObj:results[0],
            sum:results[1]
        }
    })
    
}

const productQuery = () =>{
    Product.find({})
    .then((products)=>{
        return products;
    })
}

const sumQuery =() =>{
    var sum;
    Product.find({})
    .then((products)=>{
        for(var i=0;i<products.length;i++)
        {
            Purchase.find({product:products[i]})
            .then((pickings) =>{
                for(var i = 0; i<pickings.length;i++)
                {
                    sum[i] = sum+pickings[i].amountPurchased;
                }

            })
        }
    })
    .then(()=>{
        return sum;
    })
}