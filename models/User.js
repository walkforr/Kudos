const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Must enter a name."
    },
    kudos:
        {
            type: Schema.Types.ObjectId,
            ref: 'Kudos'
        }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;