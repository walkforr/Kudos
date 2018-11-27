const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: 'Please put a title.'  
    },
    body: String,
    to: {
        type: String,
        trim: true,
        required: 'Please select a to user.'
    },
    from: {
        type: String,
        trim: true,
        required: 'Please select a from user.'
    }
});

const Kudos = mongoose.model('Kudos', KudosSchema);

module.exports = Kudos;