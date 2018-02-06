const Client = require('../src/client');

module.exports = (_id, clientDetails) =>{
    return Client.update({_id}, clientDetails);
};