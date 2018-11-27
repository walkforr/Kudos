const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGDOB_URI || 'mongodb://localhost:/kudos';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require('./routes/api-routes')(app);

app.listen(PORT, function() {
    console.log(`App running on PORT ${PORT}`);
});