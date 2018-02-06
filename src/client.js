const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = require('./order');

const ClientSchema = new Schema ({
    name:{
        //full name
        type:String
    },
    frequency:{
        // frequency of the orders (weekly/forthnightly/monthly)
        type:String
    },
    email:{
        //example@site.com
        type:String
    },
    account:{
        //number of the bank account used to pay
        type:Number
    },
    address:{
        //address to deliver vegBag
        type:String
    }

});

ClientSchema.pre('remove', function(next) {
    this.model('order').remove({ client: this._id }, next);
});

const Client = mongoose.model('client', ClientSchema);
module.exports=Client;