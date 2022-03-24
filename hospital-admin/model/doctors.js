const {Schema, model} = require('mongoose')

const doctors = new Schema({
    ism: {
        type: String,
        required: true
    }, 
    bolim: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now
    },
    img: String
})

module.exports = model('Doctors', doctors)