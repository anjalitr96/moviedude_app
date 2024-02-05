const mongoose = require('mongoose');



const showSchema = new mongoose.Schema({
    showTime: Date,
    screen:{
        type: mongoose.ObjectId,
        ref:'Screen'
    },
    movie:{
        type:mongoose.ObjectId,
        ref:'Movie'
       }
    
  });

  const Show = mongoose.model('Show', showSchema);

module.exports = Show