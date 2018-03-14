const Order = require('../src/order');

//criteria object contains startDate,endDate
module.exports = (criteria) => {
   return Order.find(buildQuery(criteria));
}

const buildQuery = (criteria)=>{
    const query =  {};

    if(criteria.startDate && criteria.endDate)
    {
        var sdate = new Date(criteria.startDate);
        var edate = new Date(criteria.endDate);
        query.date = {
            $gte:sdate,
            $lte:edate
        };
    }
    else if(criteria.startDate)
    {
        var sdate = new Date(criteria.startDate);
        query.date = {$gte:sdate};
    }

    
   else if(criteria.endDate)
    {
        var edate = new Date(criteria.endDate);
        query.date = {$lte:edate};
    }
    return query;
}