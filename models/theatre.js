const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    Name:String,
    Address:String
    
  });

  const Theatre = mongoose.model('Theatre', theatreSchema);

module.exports = Theatre