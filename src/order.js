const mongoose = require('mongoose');
const ClientSchema = require('./client');
const ProductSchema = require('./product');
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    client:{
        //reference to the client
        type: Schema.Types.ObjectId, ref: 'client' 
    },
    depositPaid:{
        //weather the deposit on the delivery has been paid
       type:Boolean
    },
    notes:{
        //notes about the delivery
        type:String
    },
    date:{
        //date for the order to be delivered
        type:Date
    },
    numberOfBags:{
        //how many vegBags are to be delivered
        type:Number
    },
    typeOfBag:{
        //type of bag ordered
        type:String
    },
    addOns:[{
        //list of fruit in the bag
            type:Schema.Types.ObjectId,
            ref:'product'
        }]

});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;  