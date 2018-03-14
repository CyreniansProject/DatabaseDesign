const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = require('./product');

const PickingSchema = new Schema ({
    product:{
        //type of product picked
        type: Schema.Types.ObjectId, ref:'product'
    },
    pickingWeek:{
        //date of picking
        type:String
    },
    amountHarvested:{
        //how much has been harvested
        type:Number
    }
   
});



const Picking = mongoose.model('picking', PickingSchema);
module.exports = Picking;