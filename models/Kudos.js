const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    body: String
});

const Kudos = mongoose.model('Kudos', NoteSchema);

module.exports = Kudos;