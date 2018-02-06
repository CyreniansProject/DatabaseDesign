const Client = require('../src/client');

module.exports = (_id)=>{
    Client.findById(_id)
    .then((client)=>{

       client.remove();
       
    });
    
};