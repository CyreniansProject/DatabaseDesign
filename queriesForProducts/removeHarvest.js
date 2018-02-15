const Harvest = require ('../src/picking');

module.exports = (_id) => {
    Picking.remove({_id}, callback);
}