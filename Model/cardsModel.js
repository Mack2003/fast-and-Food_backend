const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type: String
    }
});


const cardsModel = mongoose.model('cards', cardsSchema);

module.exports = cardsModel;