const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
   Name:String,
   Occupation:String,
   BirthPlace: String,
   Photo:String,
   About:String
  });

  const Person = mongoose.model('Person', personSchema);

module.exports = Person