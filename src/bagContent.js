const mongoose = require('mongoose');
const ProductSchema = require('./product_virtual');
const Schema = mongoose.Schema;

const BagContentSchema = new Schema ({
    typeOfBag:{
        //Small or Large bag
        type:String
    },
    product:{
        //list of fruit in the bag
        type:[ProductSchema]
    },
    date:{
        //date of the bag creation
        type:Date
    }
});

const BagContent = mongoose.model('bagContent', BagContentSchema);
module.exports = BagContent;