const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
before((done) =>{
    mongoose.connect('mongodb://localhost/database_design')
    mongoose.connection
    .once('open', () => {done();})
        .on('error', (error) => {
            console.warn('Warning ', error);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.orders.drop(() =>{
       mongoose.connection.collections.clients.drop(() =>{
           mongoose.connection.collections.bagcontents.drop(() =>{
               mongoose.connection.collections.pickings.drop(() =>{
                   mongoose.connection.collections.products.drop(() =>{
                       done();
                   });
               });
           });
       });
   });
});