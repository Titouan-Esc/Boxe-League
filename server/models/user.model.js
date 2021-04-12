const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cards : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Cards'}]
});

module.exports = mongoose.model('User', userSchema);