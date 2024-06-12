const mongoose = require('mongoose');

const resturentModel = new mongoose.Schema({
    rest_name:{
        type: String,
    },
    banner:{
        type: String
    }
});
const reaturentSchema = mongoose.model('resturents', resturentModel);

module.exports = reaturentSchema;