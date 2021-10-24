const { MONGODB } = require('../config');
const mongoose = require('mongoose');

module.exports = (client) => {
    client.mongoConnect = (mongoFiles, path) => {
        mongoose.connect(MONGODB, {
            useNewUrlParser: true
        });
        for(const file of mongoFiles) {
            require(path + file)(client);
        }
    }
    
}