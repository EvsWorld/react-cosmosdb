const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
const heroSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  { autoIndex: false }
);

const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;
