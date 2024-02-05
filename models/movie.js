const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    category : String,
    image : String,
    language : String,
    about :String
  });

  const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie