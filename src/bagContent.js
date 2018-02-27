const mongoose = require('mongoose');
const ProductSchema = require('./product');
const Schema = mongoose.Schema;

const BagContentSchema = new Schema ({
    
    product:[{
        //list of fruit in the bag
            type:Schema.Types.ObjectId,
            ref:'product'
        }],
    startDate:{
        //date of the bag creation
        type:String
    },
    endDate:{
        //date of the bag expiration
        type:String
    },
    priceSmall:{
        type:Number
    },
    priceMedium:{
        type:Number
    },
    priceLarge:{
        type:Number
    }
});

const BagContent = mongoose.model('bagContent', BagContentSchema);
module.exports = BagContent;