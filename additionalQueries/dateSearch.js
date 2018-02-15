const Order = require('../src/order');
// startDate - smaller date of the search, endDate end date of search
module.exports=(startDate,endDate)=>{
    Order.find({date:{"$gte": startDate, "$lt": endDate}},callback);
};

