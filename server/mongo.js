const mongoose = require('mongoose');
const env = require('./env/environment');

// mongoose.Promise = global.Promise;
mongoose.Promise = Promise;

const mongoUri = `mongodb://${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true&maxPoolSize=1&maxIdleTimeMS=60000&connectTimeoutMS=60000&socketTimeoutMS=60000`;

function connect() {
  return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key}});
}

module.exports = {
  connect,
  mongoose
};
