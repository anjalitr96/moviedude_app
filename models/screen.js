const mongoose = require('mongoose');
const Theatre = require('./theatre');

const screenSchema = new mongoose.Schema({
    screenNumber:Number,
    Theatre:{
        type: mongoose.ObjectId,
        ref: 'Theatre'

    },
    seating: {
      tiers:[
        {
          tierName : String,
          price: Number,
          rows:[
            {
              rowName:String,
              numberOfSeats:Number
            }
          ]
        }
      ]
    }
    
  });

  const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen