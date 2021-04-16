const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    atk : {
        type : Number,
        min : 0,
        max : 999
    },
    def : {
        type : Number,
        min : 0,
        max : 999
    },
    _user : [{ type : mongoose.Schema.Types.ObjectId, ref : 'User'}]
});


module.exports = mongoose.model('Cards', cardsSchema);