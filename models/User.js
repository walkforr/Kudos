const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
        trim: true,
        required: 'Username is Required'
    },
    password: {
        type: String,
        trim: true,
        required: 'Password is Required'
    },
    kudos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Note'
        }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;