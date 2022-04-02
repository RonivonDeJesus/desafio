const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    classification:{
        type: String,
        required: true
    }
})

const image = mongoose.model('image', ImageSchema) 

module.exports = image