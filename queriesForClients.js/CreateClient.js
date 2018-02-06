const Client = require('../src/client');

module.exports = (clientDetails) => {
    const client = new Client(clientDetails);
    return client.save();
}