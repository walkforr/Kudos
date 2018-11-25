const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    body: String,
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Kudos = mongoose.model('Kudos', KudosSchema);

module.exports = Kudos;