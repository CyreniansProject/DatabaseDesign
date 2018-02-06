const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    itemName:{
        //name of product
        type:String
    },
    avgWeight:{
        type:String
    }
});

ProductSchema.pre('remove', function(next) {
    this.model('picking').remove({ product: this._id }, next);
});

const Product = mongoose.model('product', ProductSchema);
module.exports=Product;