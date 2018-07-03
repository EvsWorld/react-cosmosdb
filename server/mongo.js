import { Promise as _Promise, connect as _connect } from 'mongoose';
import env from './env/environment';

// mongoose.Promise = global.Promise;
_Promise = Promise;

// const mongoUri = `mongodb://${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true&maxPoolSize=1&maxIdleTimeMS=60000&connectTimeoutMS=60000&socketTimeoutMS=60000`;
const mongoUri = `mongodb://localhost`;

function connect() {
  // return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key}});
  return _connect(mongoUri);
}

export default {
  connect,
  mongoose
};
