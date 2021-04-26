const mongoose = require('mongoose');

const mmaSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    pays : {
        type : String,
        required : true
    },
    naissance : {
        type : String,
        required : true
    },
    taille : {
        type : String,
        required : true
    },
    categorie : {
        type : String,
        required : true
    },
    totalVic : {
        type : Number,
        required : true
    },
    koVic : {
        type : String,
        required : true
    },
    totalDef : {
        type : Number,
        required : true
    },
    koDef : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Mma', mmaSchema);