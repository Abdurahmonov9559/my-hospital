const {Schema, model} = require('mongoose')

const category = new Schema({
    title: String,
    nomer: {
        type: Number,
        default: 0
    }, 
    bolim: {
        type: String,
        required: true
    },
    status:{
        type:Number,
        default:1
    },
    menu: {
        type:Number,
        default: 1
    },
    order: {
        type: Number, 
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Category', category)