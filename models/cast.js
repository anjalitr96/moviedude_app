const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    role : String ,
    person:{
        type: mongoose.ObjectId,
        ref: 'Person'
    },
    movie:{
        type: mongoose.ObjectId,
        ref: 'Movie'
    }
   
  });

  const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast