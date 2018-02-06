const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName:{
        type:String
    },
    avgWeight:{
        type:Number
    },
    numberOfFruit:{
        type:Number
    }
});
module.exports = ProductSchema;