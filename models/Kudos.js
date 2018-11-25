const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    title: {
      type: String,
      time: true,
      required: 'Please put a title.'  
    },
    body: String,
    to: {
        type: String,
        trim: true,
        required: 'Please select a user to send to.'
    },
    from: {
        type: String,
        trim: true,
        required: 'Please select who it is from.'
    }
});

const Kudos = mongoose.model('Kudos', KudosSchema);

module.exports = Kudos;