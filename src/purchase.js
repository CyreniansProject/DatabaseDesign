const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = require('./product');

const PurchaseSchema = new Schema ({
    product:{
        //type of product purchased
        type: Schema.Types.ObjectId, ref:'product'
    },
    date:{
        //date of picking
        type:String
    },
    amountPurchased:{
        //how much has been purchased
        type:Number
    },
    price:{
        //price for a single unit
        type:Number
    }
   
});



const Purchase = mongoose.model('purchase', PurchaseSchema);
module.exports = Purchase;