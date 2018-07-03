import { Schema as _Schema, Promise as _Promise, model } from 'mongoose';
const Schema = _Schema;

// mongoose.Promise = global.Promise;
_Promise = Promise;
const heroSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  saying: String
}, {
  autoIndex: false
});

const Hero = model('Hero', heroSchema);
export default Hero;