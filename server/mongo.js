const mongoose = require('mongoose');
const env = require('./env/environment');
const cosmosConnectString = 'mongodb://azurecosmosdbaccountevan:sA4vaugVTvQbTCCvscsACwRmVTd0ReW6d4b8BaCTb61sOmadCsjDa4UcUaRATeEl2tWOYuXfHZJ7qkWvBXCOaQ==@azurecosmosdbaccountevan.documents.azure.com:10255/?ssl=true&replicaSet=globaldb'
mongoose.Promise = global.Promise;

// const mongoUri = `mongodb://${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;

/* function connect() {
  return mongoose.connect(mongoUri, { auth: { user: env.dbName, pass: env.key }});
} */

function connect() {
   return mongoose.connect(cosmosConnectString);
}

module.exports = {
  connect,
  mongoose
};
