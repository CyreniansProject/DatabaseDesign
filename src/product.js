const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Picking = require('./picking');
const Purchase = require('./purchase');

const ProductSchema = new Schema ({
    itemName:{
        //name of product
        type:String
    },
    avgWeight:{
        //how much of each fruit is put in the vegBags
        type:String
    },
    amountSmall:{
        type:String
    },
    amountMedium:{
        type:String
    },
    amountLarge:{
        type:String
    }
},{ usePushEach: true });


ProductSchema.pre('remove', function(next) {
    this.model('picking').remove({ product: this._id });
    this.model('purchase').remove({ product: this._id }, next);
    
});



const Product = mongoose.model('product', ProductSchema);
module.exports=Product;
